import _ from 'lodash';

export function paginate (movies,current,pageSize){
    const initIndex=(current-1)*pageSize;
    
    return _(movies).slice(initIndex).take(pageSize).value(); //slicing og movies from the start index and taking 4 items (pageSize)
}