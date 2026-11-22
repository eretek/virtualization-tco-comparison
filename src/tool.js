/*! Eretek Online Araçlar #53 — Sanallaştırma Platformu TCO Karşılaştırıcı */
ERT.def('53', {
	run: function (v, c) {
		var z = function (x) { return x || 0; }, Y = v.years;
		var aOnce = z(v.aLic) + z(v.aHw), aAnn = z(v.aSup) + z(v.aLab) + z(v.aEn), bOnce = z(v.bLic) + z(v.bHw) + z(v.mig), bAnn = z(v.bSup) + z(v.bLab) + z(v.bEn);
		var rows = [], ca = aOnce, cb = bOnce, be = null;
		for (var y = 1; y <= Y; y++) { ca += aAnn; cb += bAnn; rows.push([y, c.n(ca, 0), c.n(cb, 0), c.n(ca - cb, 0)]); }
		var save = aAnn - bAnn, extra = bOnce - aOnce;
		if (save > 0) { be = extra / save; }
		var msgs = [];
		if (save <= 0) { msgs.push(['warn', c.t('noSave')]); } else { msgs.push(be <= Y ? ['ok', c.t('be', { y: c.n(be, 1) })] : ['warn', c.t('beLate', { y: c.n(be, 1), n: Y })]); }
		msgs.push(['info', c.t('nominal')]);
		var cols = [c.t('c_y'), c.t('c_a'), c.t('c_b'), c.t('c_d')];
		return { big: c.t('big', { n: Y, d: c.n(ca - cb, 0), cur: v.cur || '' }), kv: [[c.t('aAnn'), c.n(aAnn, 0)], [c.t('bAnn'), c.n(bAnn, 0)], [c.t('save'), c.n(save, 0)], [c.t('extra'), c.n(extra, 0)], [c.t('beK'), be === null ? '–' : c.n(be, 2) + ' ' + c.t('yr')]], msgs: msgs, tables: [{ cols: cols, rows: rows }], x: { csv: { name: 'tco', cols: cols, rows: rows } }, v: { breakeven: be === null ? null : Math.round(be * 1000) / 1000, diff: Math.round((ca - cb) * 100) / 100 } };
	}
});
