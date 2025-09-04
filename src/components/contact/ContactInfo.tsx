import { Mail, MapPin, Phone } from "lucide-react";

const CONTACT = {
  email: "pablomartinvillacres@gmail.com",
  phone: "+593 98 419 8999",
  location: "Ambato, Ecuador",
};

const ContactInfo = () => (
  <div className="bg-zinc-800/50 rounded-xl p-6 border border-white/5">
    <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-blue-500/20">
          <Mail className="w-5 h-5 text-blue-500" />
        </div>
        <div>
          <h3 className="text-gray-300 font-medium mb-1">Email</h3>
          <a href={`mailto:${CONTACT.email}`} className="text-gray-400 hover:text-blue-500 transition-colors">
            {CONTACT.email}
          </a>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-blue-500/20">
          <Phone className="w-5 h-5 text-blue-500" />
        </div>
        <div>
          <h3 className="text-gray-300 font-medium mb-1">Phone</h3>
          <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-blue-500 transition-colors">
            {CONTACT.phone}
          </a>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-blue-500/20">
          <MapPin className="w-5 h-5 text-blue-500" />
        </div>
        <div>
          <h3 className="text-gray-300 font-medium mb-1">Location</h3>
          <p className="text-gray-400">{CONTACT.location}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactInfo; 