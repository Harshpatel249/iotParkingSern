#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
//
#define FIREBASE_HOST "parking-cern-default-rtdb.asia-southeast1.firebasedatabase.app"
#define FIREBASE_AUTH "ikuaiEyDWMIlkdBlg4bVFdCU1wSCbVO7HLspTD3x"
#define WIFI_SSID "OnePlus7"
#define WIFI_PASSWORD "password"

String values,sensor_data;

void setup() {
  Serial.begin(9600);
    delay(1000);
  // connect to wifi.
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
  
    delay(500);
  }


 Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

}

//int n = 0;

void loop() {
  bool Sr =false;
 
  if(Serial.available()){
    
        //get sensor data from serial put in sensor_data
        sensor_data=Serial.readString(); 
        Sr=true;    
        
    }
  
delay(1000);

  if(Sr==true){  
    
  values=sensor_data;
  
  //get comma indexes from values variable
  int fristCommaIndex = values.indexOf(',');
  int secondCommaIndex = values.indexOf(',', fristCommaIndex+1);
  int thirdCommaIndex = values.indexOf(',', secondCommaIndex + 1);
  int fourthCommaIndex = values.indexOf(',', thirdCommaIndex+1);
  int fifthCommaIndex = values.indexOf(',', fourthCommaIndex+1);
  int sixthCommaIndex = values.indexOf(',', fifthCommaIndex + 1);
  
  //get sensors data from values variable by  spliting by commas and put in to variables  
  String IR_sensor1_value = values.substring(0, fristCommaIndex);
  String IR_sensor2_value = values.substring(fristCommaIndex+1, secondCommaIndex);
  String IR_sensor3_value = values.substring(secondCommaIndex+1, thirdCommaIndex);
  String IR_sensor4_value = values.substring(thirdCommaIndex+1, fourthCommaIndex);
  String ultrasonic1_value = values.substring(fourthCommaIndex+1, fifthCommaIndex);
  String ultrasonic2_value = values.substring(fifthCommaIndex+1);
  

  //store ultrasonic sensor data as string in firebase 
  Firebase.setString("IR_sensor1_value",IR_sensor1_value);
   delay(10);
  //store IR sensor 1 data as string in firebase 
  Firebase.setString("IR_sensor2_value",IR_sensor2_value);
   delay(10);
  //store IR sensor 2 data as string in firebase 
  Firebase.setString("IR_sensor3_value",IR_sensor3_value);
  delay(10);
   Firebase.setString("IR_sensor4_value",IR_sensor4_value);
   delay(10);
  //store IR sensor 1 data as string in firebase 
  Firebase.setString("ultrasonic1_value",ultrasonic1_value);
   delay(10);
  //store IR sensor 2 data as string in firebase 
  Firebase.setString("ultrasonic2_value",ultrasonic2_value);
  delay(10);
  
  
  
  delay(500);
  
  if (Firebase.failed()) {  
      return;
  }
  
} 
}
