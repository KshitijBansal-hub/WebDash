# Project Title
Wind Turbine Parameters Estimation and Visualization through Dashboard
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#Objectives">Objectives</a></li>
      </ul>
    </li>
    <li><a href="#usage">Requirements</a>
      <ul>
        <li><a href="#Hardware">Hardware</a></li>
        <li><a href="#Software">Software</a></li>
      </ul>
    </li>
    <li><a href="#Implementation">Implementation</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

# About Project
This Project is about tracking the real-time health of all parts of the turbine including generator, blades. Apart from these the live parameter obtained from the sensors   such as wind direction, temperature, current, voltage, pressure, power, and altitude which would be further sent to a dashboard having some decision-making ability on predefine dataset. The Webpage has 3 sections the first one which includes data obtained from all sensors that is visualized in the form of donuts and bar charts. A chat-bot has been implemented as well for assistance purpose and booking an appointment. Average power for a period of last five newly inserted data is calculated as well for day range specific as well. Lastly a caution button has been implemented that would trigger an alert in case value of power and rpm surpasses the limit set. The second section consists of the service alert page in which the client can raise issues which would be stored in the firebase and finally the last section that is an about us page describing about the makers and what the project is all about.

# Objectives

1.	The maintaining and servicing of wind mills determined by their efficiency and reliability.
2.	Order placement  immediately in case of  exhaustion of inventory and goods.
3.	Analysis of  the downtime and reasons for it.
4.	Ensure  that desired power is achieved from wind farm to  grid and wind plants.
5.	Maximize the Windmill power generating capability.
6.	To obtain real time insights of  failures.   

# Hardware
![Hardware](https://user-images.githubusercontent.com/64655415/119113479-c4f60f00-ba42-11eb-8ba3-ddd96a744516.PNG)

# Software
![Software](https://user-images.githubusercontent.com/64655415/119113643-ee169f80-ba42-11eb-9682-13be447d94fb.PNG)

# Implementation
The data obtained from all the  sensors in real time would be sent to ESP32 dev kit module for processing.The sensors are set at a baud rate of 9600 and the values are observed on the serial monitor.
![circuit](https://user-images.githubusercontent.com/64655415/119114849-266aad80-ba44-11eb-958f-3b8b8da2929c.PNG)





