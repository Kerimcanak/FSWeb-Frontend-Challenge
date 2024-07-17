import { useContext } from 'react';
import { LanguageContext } from './assets/LanguageContext';
import LanguageSwitcher from './assets/LanguageSwitcher';


function App() {
  const { state } = useContext(LanguageContext);

  /* Texts */
  const firstHeader = state.language === 'en' ? 'I am a Frontend Developer...' : 'Ben bir Frontend Yazılımcısıyım...';
  const firstText = state.language === 'en' ? '...who likes to craft solid and scalable frontend products with great user experiences.' : '...ve mükemmel kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir ön uç ürünleri üretmeyi seviyorum.';
  const skills = state.language === 'en' ? "Skills" : "Yeteneklerim";
  const profile = state.language === 'en' ? "Profile" : "Özgeçim";
  const basicInformation = state.language === 'en' ? "Basic Information" : "Temel Bilgiler";
  const birthDate = state.language === 'en' ? "Birth Date:" : "Dogum Tarihi:";
  const residence = state.language === 'en' ? "Residence:" : "İkametgâh:";
  const education = state.language === 'en' ? "Education:" : "Eğitim:";
  const educationDetail = state.language === 'en' ? "Graduate from Faculty of Letters in American Studies, <br/>Ege University, 2023" : "Edebiyat Fakültesi Amerikan Kültürü ve Edebiyatı Bölümü Mezunu, <br/>Ege Üniversitesi, 2023";
  const preferredRole = state.language === 'en' ? "Preferred Role:" : "Tercih Edilen Rol:";
  const aboutMe = state.language === 'en' ? "About Me" : "Hakkımda";








  

  return (
    <>
<div className="flex relative">
  <div className="absolute top-0 left-0 mt-4 ml-4 flex items-center">
    <input type="checkbox" id="darkMode" name="darkMode" value="darkMode" />
    <label htmlFor="darkMode" className="text-black ml-2">dark mode</label>
  </div>
  <div className="w-2/3 h-96 bg-indigo-700 flex flex-col items-center justify-center relative">
    <div className="absolute top-0 left-0 mt-4 ml-4 text-white text-xl"><span className="text-lime-300" >Kerimcan</span>AK</div>
    
    <LanguageSwitcher />
    <h1 className="text-4xl font-bold text-white mt-8">{firstHeader}</h1>
    <p className="text-white mt-4">
      {firstText}
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
    <h1 className="text-indigo-700 p-12	text-4xl font-bold">{skills}</h1>
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


<div className="w-screen bg-indigo-700 p-4">
  <div className="flex flex-row h-full items-start">
    <div className="text-left flex-shrink-0" >
      <h1 className="text-2xl font-bold">{profile}</h1>
      <h2 className="text-xl">{basicInformation}</h2>
      <table className="mt-4">
        <tr>
          <td>{birthDate}</td>
          <td>11.10.2001</td>
        </tr>
        <tr>
          <td>{residence}</td>
          <td>İzmir, Türkiye</td>
        </tr>
        <tr>
          <td>{education}</td>
          <td dangerouslySetInnerHTML={{ __html: educationDetail }}></td>
        </tr>
        <tr>
          <td>{preferredRole}</td>
          <td>Frontend, UI</td>
        </tr>
      </table>
    </div>
    <div className="flex flex-row items-center ml-4">
      <img src="https://picsum.photos/200" alt="Profile Image" className="rounded-full" />
      <div className="ml-4">
        <h3 className="text-xl font-bold">{aboutMe}</h3>
        <p>Lorem ipsum dolor sit amet, <br/>
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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

