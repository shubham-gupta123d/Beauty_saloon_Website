import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <Input id="email" type="email" placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <Textarea id="message" placeholder="Your Message" rows="5" />
            </div>
            <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg rounded-md">
              Send Message
            </Button>
          </form>
          <div className="mt-8 text-center text-gray-600">
            <p><strong>Phone:</strong> 1.800.218.2120</p>
            <p><strong>Email:</strong> info@nelson.com</p>
            <p><strong>Address:</strong> 128 Winston st., New York</p>
          </div>
        </div>
      </div>
    </section>
  );
}