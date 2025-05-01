import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Bussiness,CST, ArcLogo,Iatan} from "../assets/logo";

const Footer = () => {
  return (
    <footer className="bg-[#252536] text-gray-300 text-sm pt-12 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-gray-600">
        {/* Brand Section */}
        <div>
          <h2 className="text-white text-xl font-bold mb-2">ARAN<br />GRANT</h2>
          <p className="text-sm">
            Copyright © 2025 <br />
            <a href="https://arangrant.com" className="text-blue-400 hover:underline">Arangrant.com</a> / TripRobotics Inc.<br />
            California CST: 2157896,<br />
            Florida ST:45218
          </p>
        </div>

        {/* Info Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">INFORMATION</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">COMPANY</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
          </ul>
        </div>

        {/* Social + Payments */}
            <div>
          <h3 className="text-white font-semibold mb-2">SOCIAL MEDIA</h3>
          <p className="mb-2">Follow us for updates:</p>
          <div className="flex space-x-4 mb-4">
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaXTwitter className="hover:text-white cursor-pointer" />
                
          </div>
            </div>
        <div>

          <h4 className="text-white font-semibold mb-2">WE ACCEPT</h4>
          <div className="flex space-x-2">
            <img src="https://arangrant.com/wp-content/themes/blankslate/assets/img/footer-payment-social.svg" alt="Visa" className="h-6" />
            {/* <img src="/mastercard.png" alt="MasterCard" className="h-6" />
            <img src="/amex.png" alt="AMEX" className="h-6" />
            <img src="/discover.png" alt="Discover" className="h-6" /> */}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-screen-xl mx-auto py-6 text-xs text-center text-gray-400 leading-relaxed">
        *All the fares displayed are in INR and include all taxes, fees and applicable surcharges. All prices are per person, based on business class weekday travel (Monday – Thursday), and depend on the chosen class of service, departure city, airline and the route. The maximum allowable stay is six months. Please call our toll-free line for current best prices and additional details. Savings up to 70% off are indicated off the full unrestricted published airfares of major airlines and may vary based on individual fare rules. Some airlines may impose additional baggage charges. The fares are subject to seat availability in the corresponding booking inventory. Seats are limited and may not be available on all flights and dates. The fares are non-refundable, non-exchangeable, and non-transferable. The fares and their governing rules are subject to change without prior notice. Other restrictions may apply. Less restrictive fares available at different rates.
        <br className="hidden sm:inline" />
        <div className='py-2'>

        Copyright © 2025 Arangrant.com / TripRobotics Inc., 1000 N. West Street, Suite 1294, Wilmington, Delaware 19801. California CST: 2157896, Florida ST:45218
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center py-4 text-xs border-t border-gray-600">
        {/* <p>Copyright © 2025 <a href="https://arangrant.com" className="text-blue-400">Arangrant.com</a></p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <img src="/bbb.png" alt="BBB" className="h-6" />
          <img src="/asta.png" alt="ASTA" className="h-6" />
          <img src="/arc.png" alt="ARC" className="h-6" />
          <img src="/iatan.png" alt="IATAN" className="h-6" />
        </div> */}
        <Bussiness/>
        <CST/>
        <ArcLogo/>
        <Iatan/>    


      </div>
    </footer>
  );
};

export default Footer;
