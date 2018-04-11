export const Scale = function(note) {

  this.note   = note;
  this.notes  = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  this.intmaj = [2, 2, 1, 2, 2, 2, 1];
  this.intmin = [2, 1, 2, 2, 1, 2, 2];
  this.intnat = [];
  for (var i = 0; i <= 12; i++) {
    this.intnat.push(1);
  }

}
  
Scale.prototype.getNatural = function ()
{
  return this.getScale(this.intnat);
}

Scale.prototype.getScale = function (interval)
{

  var scale = [];
  var rootn = this.notes.indexOf(this.note);

  for (var i = 0; i < interval.length; i++) {
    rootn = (rootn > 12) ? 1 : (rootn > 11) ? 0 : rootn;
    scale[i] = this.notes[rootn];
    rootn = rootn + interval[i];
  }

  return scale;

}

Scale.prototype.getPentatonic = function (interval, arrp)
{

  this.scale = this.getScale(interval);

  for (var i = 0; i < arrp.length; i++) {
    this.scale.splice(arrp[i], 1);
  }
  return this.scale;

}

Scale.prototype.getField = function ()
{

  var scales = {
    major: this.getScale(this.intmaj),
    minor: this.getScale(this.intmin),
    pmajor: this.getPentatonic(this.intmaj, [3, 5]),
    pminor: this.getPentatonic(this.intmin, [1, 4])
  }

  return scales;

}
