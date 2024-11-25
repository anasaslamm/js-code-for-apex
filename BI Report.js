In the Dynamic Action of Print Button

javascript:window.open("f?p=&APP_ID.:0:&SESSION.:PRINT_REPORT=Customer", "_blank");
///////////////
In the Report Column

javascript:$s('P14_PRINT', '#CUSTOMER_ID#');

///////////////
Into the Page item

BEGIN
   -- Set the value of the P14_PRINT page item
   APEX_UTIL.SET_SESSION_STATE('S_CUSTOMER_ID', :P14_PRINT);

   -- Optionally return a confirmation message
   RETURN (103);
END;

///////////
In Dynamic Action true section

javascript:window.open("f?p=&APP_ID.:0:&SESSION.:PRINT_REPORT=Customer", "_blank");
