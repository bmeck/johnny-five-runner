var newModSys = require('noda-loader').createNodaModuleSystem;
if (process.argv[2]) {
  var filename = process.argv[2];
  newModSys(
      filename,
      filename,
      {
        'johnny-five':require('johnny-five')
      }
  )
  .runMain('./');
}
else {
  var five = require("johnny-five");
  console.log('creating REPL, use `board` and `five`');
  var board = new five.Board();

  board.on("ready", function() {
    this.repl.inject({
      five: five
    });
  });
}
