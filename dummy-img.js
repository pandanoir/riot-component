riot.tag2('dummy-img', '<img riot-src="{src}" width="{opts.width}" height="{opts.height}">', '@font-face{font-family:"Yu Gothic";src:local("Yu Gothic Medium");font-weight:100} @font-face{font-family:"Yu Gothic";src:local("Yu Gothic Medium");font-weight:200} @font-face{font-family:"Yu Gothic";src:local("Yu Gothic Medium");font-weight:300} @font-face{font-family:"Yu Gothic";src:local("Yu Gothic Medium");font-weight:400} @font-face{font-family:"Yu Gothic";src:local("Yu Gothic Bold");font-weight:bold} @font-face{font-family:"Helvetica Neue";src:local("Helvetica Neue Regular");font-weight:100} @font-face{font-family:"Helvetica Neue";src:local("Helvetica Neue Regular");font-weight:200}', '', function(opts) {
        const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
        canvas.width = opts.width;
        canvas.height = opts.height;

        const x = opts.width / 2, y = opts.height / 2;
        const text = opts.width + ' x ' + opts.height + '';

        const userAgent = window.navigator.userAgent.toLowerCase();
        let font = '"-apple-system", "Helvetica Neue", "Yu Gothic", YuGothic, Verdana, Meiryo, "M+ 1p", sans-serif';
        if (userAgent.match(/msie|trident/)) {
            const ieVersion = userAgent.match(/(?:msie\s|rv:)([\d\.]+)/)[1];
            if (parseInt(ieVersion, 10) >= 10) font = 'Verdana, Meiryo, sans-serif';
        }

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = "18px " + font;

        ctx.fillStyle = '#b3b3b3';
        ctx.fillRect(0, 0, opts.width, opts.height);

        ctx.fillStyle = '#336';
        ctx.fillText(text, x, y);

        this.src = canvas.toDataURL();
});