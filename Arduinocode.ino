int IRsensor1 = 13;
int IRsensor2 = 11;
int IRsensor3 = 12;
int IRsensor4 = 7;
int echoPin1 = 6;
int echoPin2 = 10;
int trigPin1 = 5;
int trigPin2 = 9;
int duration1;
int duration2;
int distance1;
int distance2;
String values;
int IR_sensor1_Value;
int IR_sensor2_Value;
int IR_sensor3_Value;
int IR_sensor4_Value;

 void setup() { 
  
 pinMode (IRsensor1, INPUT); 
 pinMode (IRsensor2, INPUT); 
 pinMode (IRsensor3, INPUT); 
 pinMode (IRsensor4, INPUT); 
 pinMode(trigPin1, OUTPUT);
 pinMode(trigPin2, OUTPUT);
 pinMode (echoPin1, INPUT);
 pinMode (echoPin2, INPUT);
 
 //Initializes the serial connection at 9600 to sent sensor data to ESP8266.
 Serial.begin(9600); 
 
delay(2000);  
  
 }

 
void loop() {

  // get sensors data and put in to values variables as a string.
   values= (get_IR_sensor1_Value()+','+get_IR_sensor2_Value()+','+get_IR_sensor3_Value()+','+get_IR_sensor4_Value()+','+get_distance_Value1()+','+get_distance_Value2());
       delay(1000);
       // removed any buffered previous serial data.
       Serial.flush();
       delay(2000);
       // sent sensors data to serial (sent sensors data to ESP8266)
       Serial.print(values);
       delay(3000);
 

}

// get Ultrasonic sensor data
String get_distance_Value1(){  
    digitalWrite (trigPin1, HIGH);
    delayMicroseconds (10);

    digitalWrite (trigPin1, LOW);
    duration1 = pulseIn (echoPin1, HIGH);

    distance1 = (duration1 * 0.034) / 2;
      return String(distance1);  
}

// get Ultrasonic sensor data
String get_distance_Value2(){  
    digitalWrite (trigPin2, HIGH);
    delayMicroseconds (10);

    digitalWrite (trigPin2, LOW);
    duration2 = pulseIn (echoPin2, HIGH);

    distance2 = (duration2 * 0.034) / 2;
      return String(distance2);  
}

// get IR sensor 1 data
String get_IR_sensor1_Value(){ 
   
IR_sensor1_Value =digitalRead(IRsensor1);
    
    return String(IR_sensor1_Value);  
    
}

// get IR sensor 2 data
String get_IR_sensor2_Value(){ 
   
IR_sensor2_Value = digitalRead(IRsensor2);

    return String(IR_sensor2_Value);  
}
// get IR sensor 4 data
String get_IR_sensor4_Value(){ 
   
IR_sensor4_Value = digitalRead(IRsensor4);

    return String(IR_sensor4_Value);  
}
// get IR sensor 3 data
String get_IR_sensor3_Value(){ 
   
IR_sensor3_Value =digitalRead(IRsensor3);

    return String(IR_sensor3_Value);  
}
