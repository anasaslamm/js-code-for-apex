create or replace TRIGGER AB_APP_MENU_REGISTRATION_TRIG
    BEFORE
    insert or update  on AB_APP_MENU_REGISTRATION
    for each row
begin
if inserting then
       IF :NEW.MENU_ID IS NULL THEN 
        SELECT AB_APP_MENU_REGISTRATION_SEQ.nextval 
        INTO :NEW.MENU_ID
        FROM dual; 
    END IF;
                :NEW."CREATED_BY" := NVL(V('APP_USER'),USER);
                :NEW."CREATED_ON" := LOCALTIMESTAMP;
     END IF; 
  IF UPDATING THEN
                 :NEW."UPDATED_BY" := NVL(V('APP_USER'),USER);
                 :NEW."UPDATED_ON" := LOCALTIMESTAMP;
  END IF; 
end;
/


// Sequence

-- Create the sequence
CREATE SEQUENCE AB_APP_MENU_REGISTRATION_SEQ
   START WITH 1
   INCREMENT BY 1
   NOCACHE
   NOCYCLE;
