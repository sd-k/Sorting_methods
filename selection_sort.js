const findSmallest = (list, index) => {
	var smallest = list[index];
	var pos = index;

	for (var i = index + 1; i < list.length; i++) {
		if (smallest > list[i]) {
			smallest = list[i];
			pos = i;
		}
	}

	return pos;
};

var selection_sort = list => {
	list.reduce((accumulator, currentValue, index) => {
		const pos = findSmallest(list, index);
		var temp = accumulator[index];
		accumulator[index] = accumulator[pos];
		accumulator[pos] = temp;
		return accumulator;
	}, list);

	return list;
};
console.log(selection_sort([39, 9, 81, 45, 90, 27, 72, 18]));
