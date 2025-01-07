### 1-  backend youtube project structure(model) link : - [Model link](https://app.eraser.io/workspace/d71tCMafXlr1Tt76LBgH?origin=share)

- ###  **.gitkeep**: jab bhi humen folder ke ander folder empty rakhna hota hai , toh git is ko push nahe karta wo keehta hai ke folder ke ander folder hai lekin empty , toh is problem ko solve karne ke lea hum .gitkeep use karte hai.

- ### **gitignore**: gitignore ke ander wo flies rakhte hai jo hume git pe push nahe karni hai , toh project mein toh bhut sari file hoti hai jinhe hume push nahe karna hota toh is ke lea hum ik tool use karen ge jis ka naam hai **gitignore generator** is ka kaaam ye hai ke jis tarah ke hamara project hai us ki base pe hume project files aur sab kuch b genrate kar dete hai jo gitignore mien rakhna hota hai.


- ### **.env.sample**: ye file is lea bnate hai ke .env file hamari git pe push nahe hoti , lekin hum  .env file ko b user ko dena chahte hai toh is lea hum hum .env file ka sara code .env sample mein rakhte hia ta ke push ho jae

- ### **nodemon**:  File hum update karte hain, aur nodemon server ko automatically restart kar deta hai taake naye changes apply ho jayen.


>- ## **Middleware** ka kaam backend mein:
 >- Request aur Response ke beech mein kaam karna.
 >- Har request ko process karte hue kuch extra kaam karna, jaise:
 >- Authentication check karna
 >- Data ko modify karna
 >- Logs save karna


>- ### Prettier ka kaam hai:
 >- Code ko clean aur properly set karna (spaces, lines, indentation theek karna).
 >- Har jagah ek consistent style follow karna.