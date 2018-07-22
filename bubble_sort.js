const head = list => {
	return list.length > 0 ? list[0] : undefined;
};

const tail = list => {
	return list.slice(1, list.length);
};

const reducer = (accumulator, currentValue) => {
	var lastValue = accumulator.slice(-1).pop();
	if (lastValue > currentValue) {
		var result = accumulator.slice(0, accumulator.length - 1);
		result.push(currentValue, lastValue);
		return result;
	} else {
		var result = accumulator;
		result.push(currentValue);
		return result;
	}
};

const bubbleShort = unsortedList => {
	if (unsortedList.length == 0) {
		return [];
	}
	var resultAfterNextStep = tail(unsortedList).reduce(reducer, [
		head(unsortedList)
	]);
	return bubbleShort(
		resultAfterNextStep.slice(0, resultAfterNextStep.length - 1)
	).concat([resultAfterNextStep.slice(-1).pop()]);
};

// console.log(head([1, 2, 3, 4])); // 1
// console.log(tail([1, 2, 3, 4])); // [2, 3, 4]
console.log(bubbleShort([30, 52, 29, 87, 63, 27, 18, 54])); //[18, 27, 29, 30, 52, 54, 63, 87]
