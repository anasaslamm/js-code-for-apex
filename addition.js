function totalcount() {    
    var n_salary, n_bonus, n_total;
    
    n_c1 = parseFloat($v("PAGEITEM1"), 10) ? parseFloat($v("PAGEITEM1"), 10) : 0;
    
    n_c2 = parseFloat($v("PAGEITEM2"), 10) ? parseFloat($v("PAGEITEM2"), 10) : 0; 

---------  sum 2 values ------------------   
    n_total = (n_c1 + n_c2);  

----- show total in page item ---------------
    
    $s("PAGEITEM3", parseFloat(n_total, 10));

}

// After that you have to create a Dynamic Action

Event: Lose Focus
item(s): that item
Action: execute JS Function
code: function name

Then just run


////// ///////////// //////
// When You have Interactive Grid 

Step 1:  Create Dynamic Action in column of Grid 
Select columns to add or multiple and then add affected column

nvl(:COLUMN1,0) * NVL(:COLUMN2 ,0)
nvl(:QUANTITY,0) * NVL(:RATE,0)
