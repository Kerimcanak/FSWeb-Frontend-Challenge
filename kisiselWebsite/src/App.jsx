import { useContext } from 'react';
import { LanguageContext } from './assets/LanguageContext';
import LanguageSwitcher from './assets/LanguageSwitcher';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import items from './assets/items';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';



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
  const aboutMeDetails = state.language === 'en' ? "Hello, everybody! <br/>I'm a front end developer,<br/> I like to work with computers, <br/>I follow sciences and reading. <br/>Every project is a new opportunity<br/> and a constant improvement." : "Merhaba! Ben bir front end developer'ım.<br/> Bilgisayarla ilgilenmeyi, bilimleri takip etmeyi <br/>ve okumayı seviyorum. Her proje yeni bir<br/> fırsat demek ve sürekli gelişmeyi sağlıyor."




  

  return (
    <div style={{ overflow: "hidden" }}>
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
  <img src={img1} alt="personal photo" className="absolute sm:transform sm:-translate-x-32 md:transform md:-translate-x-48 lg:transform lg:-translate-x-64 rounded h-60 w-48" />
  
  </div>
</div>





<div className="flex flex-col sm:flex-row relative pb-10">
  <div className="mt-4 ml-4 sm:absolute sm:top-0 sm:left-0 sm:mt-4 sm:ml-4">
    <h1 className="text-indigo-700 p-12 text-4xl font-bold">{skills}</h1>
  </div>
  <div className="w-full flex justify-end mt-4 ml-4">
    <div className="w-3/4 flex flex-wrap justify-end">
      {items.map((item, index) => (
        <div key={index} className="w-full sm:w-1/3 p-2">
          <img src={item.image} alt={item.title} className="rounded h-24 w-24" />
          <div className="text-neutral-500">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>




<div className="w-screen bg-indigo-700 p-4 pb-12">
  <div className="flex flex-col md:flex-row h-full items-start">
    <div className="text-left flex-shrink-0">
      <h1 className="text-lime-300 p-12 text-4xl font-bold">{profile}</h1>
      <h2 className="text-xl text-white pl-12">{basicInformation}</h2>
      <table className="mt-4 border-separate border-spacing-2">
        <tr>
          <td className="text-lime-300 pl-12">{birthDate}</td>
          <td className="text-white">11.10.2001</td>
        </tr>
        <tr>
          <td className="text-lime-300 pl-12">{residence}</td>
          <td className="text-white">İzmir, Türkiye</td>
        </tr>
        <tr>
          <td className="text-lime-300 pl-12">{education}</td>
          <td className="text-white" dangerouslySetInnerHTML={{ __html: educationDetail }}></td>
        </tr>
        <tr>
          <td className="text-lime-300 pl-12">{preferredRole}</td>
          <td className="text-white">Frontend, UI</td>
        </tr>
      </table>
    </div>
    <div className="flex flex-col md:flex-row items-center ml-4">
      <img src={img2} alt="Profile Image" className="rounded h-80 w-48 pt-20" />
      <div className="ml-4">
        <h3 className="text-xl font-bold pt-11 text-white">{aboutMe}</h3>
        <p dangerouslySetInnerHTML={{ __html: aboutMeDetails }} className='text-white'></p>
      </div>
    </div>
  </div>
</div>





<div className="w-screen h-auto bg-lime-300 flex flex-col items-center justify-start space-y-4 py-4">
  <h1 className="text-4xl font-bold text-indigo-700">Projects</h1>
  {/* proje kartları! */}
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:shrink-0">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
        <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
      </div>
    </div>
  </div>
  {/* proje kartı 2 */}
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:shrink-0">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
        <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
      </div>
    </div>
  </div>
</div>







<footer className="w-screen h-64 bg-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-indigo-700">Send me a message!</h1>
      <div>Got a question or proposal, or just want to say hello? Go ahead.</div>
      <div>kerimcanak@gmail.com</div>
      <div className="flex space-x-4 mt-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} className="text-indigo-700" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} className="text-indigo-700" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="text-indigo-700" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="text-indigo-700" />
        </a>
      </div>
    </footer>
    </div>
  );
  
}

export default App

