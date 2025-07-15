import { Github, Mail, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-[var(--portfolio-darker)] text-center">
      <div className="container mx-auto px-6">
        <p className="text-gray-400 mb-4">© 2024 Dhanush C. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Dhanushc22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[var(--portfolio-primary)] transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:dhanushc092@gmail.com"
            className="text-gray-400 hover:text-[var(--portfolio-primary)] transition-colors"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://drive.google.com/file/d/1eAy7ZhYZSqRz3tL68l_1JvlAl1zOqSK9/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[var(--portfolio-primary)] transition-colors"
          >
            <FileText size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
