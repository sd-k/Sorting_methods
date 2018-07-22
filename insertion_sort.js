const head = list => {
	return list.length > 0 ? list[0] : undefined;
};

const tail = list => {
	return list.slice(1, list.length);
};

const findLastInsertionPosition = (list, element) => {
	return list.reduce((res, currentValue, index) => {
		return currentValue < element ? index : res;
	});
};

const insertionSort = unsortedList => {
	return tail(unsortedList).reduce(
		(accumulator, currentValue) => {
			const positionToInsert = findLastInsertionPosition(
				accumulator,
				currentValue
			);
			const result = accumulator;
			result.splice(positionToInsert, 0, currentValue);
			return result;
		},
		[head(unsortedList)]
	);
};

console.log(insertionSort([30, 52, 29, 87, 63, 27, 18, 54])); //[18, 27, 29, 30, 52, 54, 63, 87]
