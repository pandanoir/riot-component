riot.tag2('analog-clock', '<div class="border"> <div class="board"> <div class="hand second-hand" riot-style="transform: rotate({secondDeg}deg)"></div> <div class="hand minute-hand" riot-style="transform: rotate({minuteDeg}deg)"></div> <div class="hand hour-hand" riot-style="transform: rotate({hourDeg}deg)"></div> </div> </div>', 'analog-clock .border,[data-is="analog-clock"] .border{ position: relative; border: 4px solid #444; border-radius: 50%; width: 80px; height: 80px; box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3), inset 0px 1px 1px rgba(0, 0, 0, 0.3); } analog-clock .board,[data-is="analog-clock"] .board{ background: #eee; border-radius: 50%; width: 80px; height: 80px; } analog-clock .hand,[data-is="analog-clock"] .hand{ position: absolute; top: 50%; left: 50%; width: 2px; margin-left: -1px; background: #000; transform-origin: 1px 100%; } analog-clock .minute-hand,[data-is="analog-clock"] .minute-hand{ height: 35px; margin-top: -35px; } analog-clock .hour-hand,[data-is="analog-clock"] .hour-hand{ height: 20px; margin-top: -20px; } analog-clock .second-hand,[data-is="analog-clock"] .second-hand{ height: 40px; margin-top: -40px; background: #f00; }', '', function(opts) {
  const setDeg = () => {
    this.hourDeg = (this.hour % 12 + (this.minute + this.second / 60) / 60) / 12 * 360;
    this.minuteDeg = (this.minute + this.second / 60) / 60 * 360;
    this.secondDeg = this.second / 60 * 360;
  }
  if (opts.hour != null && opts.minute != null) {
    this.hour = parseInt(opts.hour, 10);
    this.minute = parseInt(opts.minute, 10);
    this.second = opts.second ? parseInt(opts.second, 10) : 0;
    setDeg();
    this.update();
  } else if (opts.utc != null) {
    const UTCHour = parseInt(opts.utc.split(':')[0], 10),
      UTCMinute = parseInt(opts.utc.split(':')[1], 10) || 0;
    const update = () => {
      this.hour = new Date().getUTCHours() + UTCHour;
      this.minute = new Date().getUTCMinutes() + UTCMinute;
      this.second = new Date().getUTCSeconds();
      setDeg();
      this.update();
    }
    setInterval(update, 1000 / 32);
    update();
  } else {
    const update = () => {
      this.hour = new Date().getHours();
      this.minute = new Date().getMinutes();
      this.second = new Date().getSeconds();
      setDeg();
      this.update();
    }
    setInterval(update, 1000 / 32);
    update();
  }
});
