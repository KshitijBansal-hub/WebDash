# Project Title
### Wind Turbine Parameters Estimation and Visualization through Dashboard

<details open="open" >
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
    <li><a href="#Results">Results</a></li>
    <li><a href="#Conclusion">Conclusion</a></li>
    <li><a href="#Contributors">Contributors</a></li>
    <li><a href="#Acknowledgement">Acknowledgement</a></li>
  </ol>
</details>

## About Project
This Project is about tracking the real-time health of all parts of the turbine including generator, blades. Apart from these the live parameter obtained from the sensors   such as wind direction, temperature, current, voltage, pressure, power, and altitude which would be further sent to a dashboard having some decision-making ability on predefine dataset. The Webpage has 3 sections the first one which includes data obtained from all sensors that is visualized in the form of donuts and bar charts. A chat-bot has been implemented as well for assistance purpose and booking an appointment. Average power for a period of last five newly inserted data is calculated as well for day range specific as well. Lastly a caution button has been implemented that would trigger an alert in case value of power and rpm surpasses the limit set. The second section consists of the service alert page in which the client can raise issues which would be stored in the firebase and finally the last section that is an about us page describing about the makers and what the project is all about.

## Objectives

1.	The maintaining and servicing of wind mills determined by their efficiency and reliability.
2.	Order placement  immediately in case of  exhaustion of inventory and goods.
3.	Analysis of  the downtime and reasons for it.
4.	Ensure  that desired power is achieved from wind farm to  grid and wind plants.
5.	Maximize the Windmill power generating capability.
6.	To obtain real time insights of  failures.   

## Hardware
![Hardware](https://user-images.githubusercontent.com/64655415/119113479-c4f60f00-ba42-11eb-8ba3-ddd96a744516.PNG)

## Software
![Software](https://user-images.githubusercontent.com/64655415/119113643-ee169f80-ba42-11eb-9682-13be447d94fb.PNG)

## Implementation
The figure represents interfacing of all sensors with ESP32 Module that are set at a baud rate of 9600.

![circuit](https://user-images.githubusercontent.com/64655415/119114849-266aad80-ba44-11eb-958f-3b8b8da2929c.PNG)

## Results
Dashboard showing the real time parameters of the wind turbine which can be accessed from anywhere.The dashboard portrays values in a time stamp of 5 intervals along with a mapper to see the optimal conditions. Real time data is visualized here in the form of graphs and donuts.Also, a page with a button for calculating average power for 5 days and power over a day range along with a caution that acts as a limiter. A chat-bot for service support and maintenance can be seen in the right hand (down) corner.

![Dashboard](https://user-images.githubusercontent.com/64655415/119115483-d5a78480-ba44-11eb-8977-6c647760eee1.PNG)

## Conclusion
Thus, the project was implemented starting with collection of data from the sensors to processing of it by ESP32.From there sending to Firebase for storage and visualizing it through dashboard.It can be used by agencies and companies to ensure that optimum conditions as well as servicing and maintenance of windmill is done for which a integrated chat-bot that books an appointment and service alert page in which users can list their issues. 
Overall, it is a model that can be beneficial for wind farms and small scale companies that need to maximize Cost efficiency in maintaining and servicing wind turbines.

## Contributors
* Prof Vinaya Gohokar
* Kshitij Bansal
* Dipu Singh
* Marut Asawa

## Acknowledgement
We express our gratitude to the institution MIT WORLD PEACE UNIVERSITY, PUNE.

We deeply express our sincere thanks to our Head of School, ECE, Dr Vinaya Gohokar for encouraging and allowing us to present the project on the topic “Wind Turbine Parameters Estimation And Visualization Through Dashboard” at our department premises.

We would also like to thank Prof. Vishal Mamde, Project Coordinator for his constant support and guidance throughout the course of this study. We really appreciate his gentleness and considerate nature, and at the same time being highly professional at work.

