// If you want to change page item according to selected page Item

$('#P320_TYPE').change(function(){ 
    if($v('P320_TYPE') == 'BANK PAYMENT' || $v('P320_TYPE') == 'BANK RECEIPT'){ 
        $x_Show('P320_BANK_ACCOUNT');
        $x_Hide('P320_CASH_ACCOUNT');
    } // to show these page items if P320_TYPE has 'BANK PAYMENT' or 'BANK RECEIPT'
    else{
        $x_Hide('P320_BANK_ACCOUNT');
        $x_Show('P320_CASH_ACCOUNT');
    }
});

//
