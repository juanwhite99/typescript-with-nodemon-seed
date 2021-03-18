const printConsole = false;

function handleAmountRangeFilter(amountRange: { min?: number; max?: number }) {
    const hasChanged =
      !!amountRange && ((!amountRange.max && !!amountRange.min) || (!amountRange.min && !!amountRange.max) || (!!amountRange.min && !!amountRange.max));
    console.log(hasChanged);
}

function handleAmountRangeFilter2(amountRange: { min?: number; max?: number }) {
    const hasChanged = !!(amountRange?.max || amountRange?.min);
    console.log(hasChanged);
}

console.log('------------------------');
handleAmountRangeFilter({min:null, max:null});
handleAmountRangeFilter2({min:null, max:null});

console.log('------------------------');
handleAmountRangeFilter({min: 0, max: 0});
handleAmountRangeFilter2({min: 0, max: 0});

console.log('------------------------');
handleAmountRangeFilter({min: 0, max: 1});
handleAmountRangeFilter2({min: 0, max: 1});

console.log('------------------------');
handleAmountRangeFilter({min: 1, max: 0});
handleAmountRangeFilter2({min: 1, max: 0});

console.log('------------------------');
handleAmountRangeFilter({min: 1, max: 1});
handleAmountRangeFilter2({min: 1, max: 1});

console.log('------------------------');
handleAmountRangeFilter({min: -1, max: 1});
handleAmountRangeFilter2({min: -1, max: 1});

console.log('------------------------');
handleAmountRangeFilter({min: -1, max: null});
handleAmountRangeFilter2({min: -1, max: null});


function handleDateRangeFilter(dateRange: { start?: Date | any; end?: Date | any }) {
    const hasChanged = !!dateRange && (!!dateRange.start && !!dateRange.end);
    console.log(hasChanged);
}

function handleDateRangeFilter2(dateRange: { start?: Date | any; end?: Date | any }) {
    const hasChanged = !!(dateRange?.start && dateRange?.end);
    console.log(hasChanged);
}


const date = new Date();

console.log('------------------------');
handleDateRangeFilter({start:null, end:null});
handleDateRangeFilter2({start:null, end:null});

console.log('------------------------');
handleDateRangeFilter({start: null, end: date});
handleDateRangeFilter2({start: null, end: date});

console.log('------------------------');
handleDateRangeFilter({start: date, end: null});
handleDateRangeFilter2({start: date, end: null});

console.log('------------------------');
handleDateRangeFilter({start: date, end: date});
handleDateRangeFilter2({start: date, end: date});

