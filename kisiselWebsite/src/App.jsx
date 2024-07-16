


function App() {

  return (
    <>
<div className="flex relative">
  <div className="absolute top-0 left-0 mt-4 ml-4 flex items-center">
    <input type="checkbox" id="darkMode" name="darkMode" value="darkMode" />
    <label htmlFor="darkMode" className="text-black ml-2">dark mode</label>
  </div>
  <div className="w-2/3 h-96 bg-indigo-700 flex flex-col items-center justify-center relative">
    <div className="absolute top-0 mt-4 text-white text-xl">almila <span>switch language</span></div>
    <h1 className="text-4xl font-bold text-white mt-8">I am a Frontend Developer...</h1>
    <p className="text-white mt-4">
      ...who likes to craft solid and scalable frontend products with great user experiences.
    </p>
    <div className="mt-8">
      <button className="bg-white text-indigo-700 font-bold py-2 px-4 rounded mr-4">Button 1</button>
      <button className="bg-white text-indigo-700 font-bold py-2 px-4 rounded">Button 2</button>
    </div>
  </div>
  <div className="w-1/3 h-96 bg-lime-300 flex items-center justify-center">
  <img src="https://picsum.photos/200" alt="Random" className="absolute left-2/3 transform -translate-x-1/3 rounded" />  </div>
</div>





<div className="flex relative">
  <div className="absolute top-0 left-0 mt-4 ml-4">
    <h1 className="text-indigo-700">Skills</h1>
  </div>
  <div className="w-full flex justify-end mt-4 ml-4">
    <div className="w-3/4 flex flex-wrap justify-end">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div key={index} className="w-1/3 p-2">
          <img src={`https://picsum.photos/200?random=${index}`} alt={`Random ${index}`} className="rounded" />
          <div className="text-neutral-500">
            <h2>Title {index}</h2>
            <p>Description {index}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
<div className="w-screen h-64 bg-white"></div>


<div className="w-screen bg-indigo-700 p-4">
  <div className="flex flex-row h-full items-start">
    <div className="text-left flex-shrink-0">
      <h1 className="text-2xl font-bold">Profile</h1>
      <h2 className="text-xl">Basic Information</h2>
      <table className="mt-4">
        <tr>
          <td>Birth-date:</td>
          <td>11.10.2001</td>
        </tr>
        <tr>
          <td>Residence:</td>
          <td>İzmir, Turkey</td>
        </tr>
        <tr>
          <td>Education:</td>
          <td>Graduate from Faculty of Letters in American Studies, Ege University, 2023</td>
        </tr>
        <tr>
          <td>Preferred role:</td>
          <td>Frontend, UI</td>
        </tr>
      </table>
    </div>
    <div className="flex flex-row items-center ml-4">
      <img src="https://picsum.photos/200" alt="Profile Image" className="rounded-full" />
      <div className="ml-4">
        <h3 className="text-xl font-bold">About Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>
</div>




    <div className="w-screen h-64 bg-lime-300 flex items-center justify-center">
    <h1 className="text-4xl font-bold text-indigo-700">Projects</h1>
    </div>



    <footer className="w-screen h-64 bg-white flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold text-indigo-700">Send me a message!</h1>
    <div>Got a question or proposal, or just want to say hello? Go ahead.
    </div>
    <div>kerimcanak@gmail.com
    </div>

    </footer>
    </>
  );
  
}

export default App

