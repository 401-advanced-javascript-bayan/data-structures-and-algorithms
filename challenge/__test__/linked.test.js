'use strict';
let  LinkedList = require('../../lib/linked.js') ;



describe(' LinkedList Module  insert() ', () => {

    it(' is it  empty  ', () => {

        let test = new LinkedList();
        expect(test.head).toEqual(null);
    });

});

