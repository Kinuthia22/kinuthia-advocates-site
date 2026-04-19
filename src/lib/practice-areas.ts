import {
  Scale, Gavel, Building2, Home, Users, Shield, Banknote, Landmark,
  FileText, Briefcase, Globe, Trophy, Calculator, Lightbulb, BookOpen, Handshake,
} from "lucide-react";

export const practiceAreas = [
  { icon: Scale, title: "Civil & Criminal Litigation", description: "Robust representation in civil and criminal matters before all courts in Kenya." },
  { icon: Gavel, title: "Civil Rights Litigation", description: "Vigorous defense of constitutional and fundamental human rights." },
  { icon: Handshake, title: "ADR, Mediation & Arbitration", description: "Pragmatic dispute resolution outside the courtroom — saving time and cost." },
  { icon: Banknote, title: "Banking & Securities", description: "Advice for banks, lenders and borrowers on facilities, security and compliance." },
  { icon: Home, title: "Conveyancing & Real Estate", description: "Property transfers, leases, charges and full due diligence on Kenyan land." },
  { icon: Building2, title: "Corporate & Commercial Law", description: "Incorporation, governance, M&A, shareholder agreements and commercial contracts." },
  { icon: FileText, title: "Debt Recovery", description: "Strategic recovery of debts for individuals and institutional creditors." },
  { icon: Users, title: "Family Law & Child Custody", description: "Compassionate counsel on divorce, custody, succession and matrimonial property." },
  { icon: Landmark, title: "Land Law", description: "Title verification, boundary disputes, succession and Land Registry matters." },
  { icon: Lightbulb, title: "Intellectual Property", description: "Trademarks, copyright, patents and IP commercialisation in Kenya and beyond." },
  { icon: BookOpen, title: "Media Law", description: "Defamation, publication clearance and regulatory advice for media houses." },
  { icon: Briefcase, title: "Procurement Law", description: "Public procurement advisory, bid challenges and PPADA compliance." },
  { icon: Trophy, title: "Sports Agency Law", description: "Player representation, image rights and sports governance matters." },
  { icon: Calculator, title: "Tax Law", description: "Tax planning, KRA disputes and tax appeals tribunal representation." },
  { icon: Shield, title: "Legal Compliance & Audits", description: "Health-checks of your legal posture and ongoing compliance frameworks." },
  { icon: Globe, title: "Financial Services Law", description: "Regulatory advice for financial institutions, fintech and capital markets." },
] as const;
