riot.tag2('digital-clock', '<span>{hour} : {minute} : {second}</span>', '', '', function(opts) {
  const update = () => {
    this.hour = ('0' + new Date().getHours()).slice(-2);
    this.minute = ('0' + new Date().getMinutes()).slice(-2);
    this.second = ('0' + new Date().getSeconds()).slice(-2);
    this.update();
  };
  update();
  setInterval(update, 1000/32);
});
