'use strict';
let  LinkedList     = require('../lib/linked.js') ;



describe(' LinkedList Module  insert() ', () => {

    it(' is it  empty  ', () => {

        let testLL = new LinkedList();
        expect(testLL.head).toEqual(null);
    });

});