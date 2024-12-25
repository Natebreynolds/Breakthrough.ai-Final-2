export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Breakthrough AI</h3>
            <p className="text-muted-foreground">
              Empowering businesses with AI-driven sales strategies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-muted-foreground hover:text-foreground">About</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-foreground">Services</a></li>
              <li><a href="/resources" className="text-muted-foreground hover:text-foreground">Resources</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>contact@breakthroughai.com</li>
              <li>1-800-BREAKTHROUGH</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Breakthrough Coaching AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}