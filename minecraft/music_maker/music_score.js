class ScorePosition {
    position;
    note;
    layer;

    constructor(pos, note, layer) {
        this.position = parseInt(pos);
        this.note = Math.min(Math.max(parseInt(note), 0), 25);
        this.layer = layer;
    }

    equals(other) {
        return other.position === this.position && other.note === this.note && other.layer === this.layer;
    }
}

class ScoreLayer {
    name;
    notes;
    html;
    noteCount;
    zIndex;
    constructor(name, index) {
        this.noteCount = 0;
        this.name = name;
        this.zIndex = index
        this.notes = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    }
    
}

class Score {
    layers;
    listeners;
    currentIndex;
    constructor() {
        this.layers = {};
        this.listeners = {};
        this.currentIndex = 0;
    }

    static fromJSON(json) {
        var music = JSON.parse(json);

        var score = new Score();
        for (const [layername, layer] of Object.entries(music)) {
            let newLayer = new ScoreLayer(layername, layer.zindex);
            newLayer.notes = layer.notes;
            score.layers[layername] = newLayer;
        }
        return score;
    }

    toJSON() {
        var newLayers = {};
        for (const [layername, layer] of Object.entries(this.layers)) {
            const layerNotes = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
            for (let i = 0; i <= 24; i++) {
                const newRow = layerNotes[i];
                const oldRow = layer.notes[i];
                for (let j = 0; j < oldRow.length; j++) {
                    const note = oldRow[j];
                    if (note) {
                        newRow[j] = {
                            instrument: note.instrument
                        }
                    }
                }
            }

            newLayers[layername] = {
                notes: layerNotes,
                zindex: layer.zIndex
            }
        }
        var json = JSON.stringify(newLayers);
        return json;
    }


    getOrCreateLayer(layer) {
        var layerobj = this.layers[layer];
        if (!layerobj) {
            layerobj = new ScoreLayer(layer, this.currentIndex);
            this.currentIndex++
            this.layers[layer] = layerobj

            this.fireEvent("layerschanged", {layer: layer, removed: false});
        }
        return layerobj
    }


    removeLayer(layer) {
        var layerobj = this.layers[layer];
        if (layerobj) {

            for (var i = 0; i <= 24; i++) {
                var row = layerobj.notes[i];
                for (let j = 0; j < row.length; j++) {
                    let note = row[j];
                    if (note) {
                        if (note.element) {
                            note.element.remove();
                        }
                    }
                }
            }
            delete this.layers[layer];
            this.fireEvent("layerschanged", {layer: layer, removed: true});
            return layerobj;
        }
    }

    removeNote(position) {
        var layerobj = this.layers[position.layer];
        if (layerobj) {
            var note = layerobj.notes[position.note][position.position];
            if (note) {
                if (note.element) {
                    note.element.remove();
                }
                delete layerobj.notes[position.note][position.position];
                layerobj.noteCount--;
            }
        }
    }
    setNote(position, note, grid) {
        var layerobj = this.layers[position.layer];
        if (!layerobj) {
            layerobj = new ScoreLayer(position.layer, this.currentIndex);
            this.currentIndex++;
            this.layers[position.layer] = layerobj
            
            this.fireEvent("layerschanged", {layer: position.layer, removed: false});
        }
        if (layerobj.notes[position.note][position.position]) {

        } else {
            layerobj.notes[position.note][position.position] = note;
            if (note.element) {
                grid.appendChild(note.element);
                note.element.style.top = position.note*32+"px";
                note.element.style.left = position.position*32+"px";
            }
            layerobj.noteCount++;
        }
    }
    getNote(position) {
        var layerobj = this.layers[position.layer];
        if (layerobj) {
            var note = layerobj.notes[position.note][position.position];
            if (note) {
                return note;
            }
        }
        return undefined;
    }

    fireEvent(event, arg) {
        var handlers = this.listeners[event];
        if (handlers) {
            for (const handler of handlers) {
                handler(arg);
            }
        }
    }
    addEventListener(event, handler) {
        var handlers = this.listeners[event];
        if (!handlers) {
            handlers = [];
            this.listeners[event] = handlers;
        }
        handlers.push(handler);
    }
}