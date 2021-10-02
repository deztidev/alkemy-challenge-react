export const getAverageHeight = team => {
	const heights = [];
	team.map(hero => heights.push(parseInt(hero.appearance.height[1])));
	return Math.floor(
		heights.reduce((total, height) => total + height) / team.length
	);
};

export const getAverageWeight = team => {
	const weights = [];
	team.map(hero => weights.push(parseInt(hero.appearance.weight[1])));
	return Math.floor(
		weights.reduce((total, weight) => total + weight) / team.length
	);
};

export const getPowerstats = team => {
	const powerstats = {};
	const keys = [
		"combat",
		"durability",
		"intelligence",
		"power",
		"speed",
		"strength",
	];
	for (const key of keys) {
		powerstats[key] = 0;
	}
	team.map(hero => {
		for (let i = 0; i < keys.length; i++) {
			if (hero.powerstats[keys[i]] !== "null")
				powerstats[keys[i]] += parseInt(hero.powerstats[keys[i]] || "null");
		}
		return powerstats;
	});
	return powerstats;
};
