import App from './App'

function Home()
{
    return <div>
   
        <title>Project</title>
        <center><h1> E-Comm Project</h1></center>
      
        <style jsx global>
        {
            `
            h1{color:brown}
            ul{
                background-color:black;
                padding:20px;
                list-style-type:none
            }
            li{
                display:inline;
                margin-right:20px;
                color:red;
                font-size:18px;
              }
            a{
                color:white
            }
            `
        }
        </style>
                   <style jsx global>
  {`
      body {
          background: #E0FFFF;
       }
   `}
</style>
 
    <App/>
  
    </div>
}
export default Home;