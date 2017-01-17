riot.tag2('date', '<span>{string}</span>', '', '', function(opts) {
  const format = opts.format || 'yyyy/MM/dd(E)';
  const update = () => {
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
    const zerofill = (n, m) => {
      return '0'.repeat(Math.max(n - `${m}`.length, 0)) + m;
    };
    let res = '';
    for (let i = 0, _i = format.length; i < _i; i++) {
      const s = format.charAt(i);
      if (s === '\\') {i++; res += format.charAt(i); continue;}
      else if (s === 'd') {
        let n = 0;
        while (format.charAt(i + n) === 'd') n++;
        if (n >= 3) throw new Error('Too many pattern letters: d');
        if (n <= 2) res += zerofill(n, date);
        i += n - 1;
      } else if (s === 'E') {
        let n = 0;
        while (format.charAt(i + n) === 'E') n++;
        if (n >= 6) throw new Error('Too many pattern letters: E');
        if (n === 5) res += day.charAt(0);
        if (n === 4) res += day;
        if (n <= 3) res += day.slice(0, 3);
        i += n - 1;
      } else if (s === 'M') {
        let n = 0;
        while (format.charAt(i + n) === 'M') n++;
        if (n >= 6) throw new Error('Too many pattern letters: M');
        if (n === 5) res += monthName[month].charAt(0);
        if (n === 4) res += monthName[month];
        if (n === 3) res += monthName[month].slice(0, 3);
        if (n <= 2) res += zerofill(n, month + 1);
        i += n - 1;
      }
      else if (s === 'y') {
        let n = 0;
        while (format.charAt(i + n) === 'y') n++;
        if (n === 2) res += (`${year}`).slice(-2);
        else res += zerofill(n, year);
        i += n - 1;
      }
      else res += s;
    }
    this.string = res;
    this.update();
  };
  update();

});
