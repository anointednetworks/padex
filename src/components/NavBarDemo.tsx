
import { Home, Users, BookText, BookOpen, Mail, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About Us', url: '/about', icon: Users },
    { name: 'Resource Center', url: '/projects', icon: BookText },
    { name: 'Document Processor', url: '/document-processor', icon: FileText },
    { name: 'Glossary', url: '/glossary', icon: BookOpen },
    { name: 'Contact Us', url: '/contact', icon: Mail }
  ]

  return <NavBar items={navItems} />
}
