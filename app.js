var tiles = [
	{ name: 'blank', point: 0 },
	{ name: 'a', point: 1 },
	{ name: 'e', point: 1 },
	{ name: 'i', point: 1 },
	{ name: 'o', point: 1 },
	{ name: 'u', point: 1 },
	{ name: 'l', point: 1 },
	{ name: 'n', point: 1 },
	{ name: 's', point: 1 },
	{ name: 't', point: 1 },
	{ name: 'r', point: 1 },
	{ name: 'd', point: 2 },
	{ name: 'g', point: 2 },
	{ name: 'b', point: 3 },
	{ name: 'b', point: 3 },
	{ name: 'c', point: 3 },
	{ name: 'c', point: 3 },
	{ name: 'm', point: 3 },
	{ name: 'm', point: 3 },
	{ name: 'p', point: 3 },
	{ name: 'p', point: 3 },
	{ name: 'f', point: 4 },
	{ name: 'f', point: 4 },
	{ name: 'h', point: 4 },
	{ name: 'h', point: 4 },
	{ name: 'v', point: 4 },
	{ name: 'v', point: 4 },
	{ name: 'w', point: 4 },
	{ name: 'w', point: 4 },
	{ name: 'y', point: 4 },
	{ name: 'y', point: 4 },
	{ name: 'k', point: 5 },
	{ name: 'j', point: 8 },
	{ name: 'x', point: 8 },
	{ name: 'q', point: 10 },
	{ name: 'z', point: 10 }
];
var numberWithoutOrder = 473760;
var numberPossibleHands = 0;

for (var i = 0; i < 36; i++) {
	for (var j = i; j < 36; j++) {
		if (j != i) {
			for (var k = j; k < 36; k++) {
				if (k != j && k != i) {
					for (var r = k; r < 36; r++) {
						if (r != k && r != j && r != i) {
							for (var p = r; p < 36; p++) {
								if (p != r && p != k && p != j && p != i) {
									for (var w = p; w < 36; w++) {
										if (w != p && w != r && w != k && w != j && w != i) {
											for (var t = w; t < 36; t++) {
												if (t != w && t != p && t != r && t != k && t != j && t != i) {
													if (
														tiles[i].point +
															tiles[j].point +
															tiles[k].point +
															tiles[r].point +
															tiles[p].point +
															tiles[w].point +
															tiles[t].point ==
														46
													) {
														numberPossibleHands++;
														var hand =
															tiles[i].name +
															', ' +
															tiles[j].name +
															', ' +
															tiles[k].name +
															', ' +
															tiles[r].name +
															', ' +
															tiles[p].name +
															', ' +
															tiles[w].name +
															', ' +
															tiles[t].name +
															'.';
														console.log(hand);
													}
													if (t >= 13 && t <= 30) {
														t++;
													}
												}
											}
											if (w >= 13 && w <= 30) {
												w++;
											}
										}
									}
									if (p >= 13 && p <= 30) {
										p++;
									}
								}
							}
							if (r >= 13 && r <= 30) {
								r++;
							}
						}
					}
					if (k >= 13 && k <= 30) {
						k++;
					}
				}
			}
			if (j >= 13 && j <= 30) {
				j++;
			}
		}
	}
	if (i >= 13 && i <= 30) {
		i++;
	}
}
console.log(numberPossibleHands);
