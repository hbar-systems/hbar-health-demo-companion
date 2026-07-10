/**
 * Demo companion content, DE + EN. The operator reads EN while presenting DE.
 * Prose sections are arrays of paragraphs; tools and FAQ are structured lists.
 * Static reference — nothing here calls a model or touches data.
 */

export type Lang = "de" | "en";

export interface ProseSection {
  id: string;
  title: { de: string; en: string };
  paras: { de: string[]; en: string[] };
}

export const OVERVIEW: ProseSection = {
  id: "overview",
  title: { de: "Überblick", en: "Overview" },
  paras: {
    de: [
      "hbar.health ist die eigene, private KI Ihrer Praxis. Sie läuft auf einem Server, den die Praxis kontrolliert — keine Cloud, kein OpenAI, kein Microsoft.",
      "Auf dieser Basis — dem „Brain“ — installieren wir kleine Werkzeuge, die je eine konkrete tägliche Aufgabe abnehmen: Briefe lesen, zuordnen, erinnern, Entwürfe schreiben.",
      "Grundregel: Die KI erstellt nur Entwürfe. Sie prüfen und entscheiden. Keine Diagnostik.",
    ],
    en: [
      "hbar.health is your practice's own private AI. It runs on a server the practice controls — no cloud, no OpenAI, no Microsoft.",
      "On top of it — the \"brain\" — we install small tools, each taking over one concrete daily task: reading letters, filing, reminding, drafting.",
      "Core rule: the AI only drafts. You review and decide. No diagnosis.",
    ],
  },
};

export const WHY: ProseSection = {
  id: "why",
  title: { de: "Warum für Ihre Praxis", en: "Why for your practice" },
  paras: {
    de: [
      "Der Schmerz in der Hausarztpraxis ist nicht die Diagnose — es sind Dokumentation, Telefon, Bürokratie und vergessene Abrechnung. Genau da setzen die Werkzeuge an.",
      "Validiert in Gesprächen mit zwei Hausärzten: die Eingangspost-Flut (~600 Briefe/Woche, nur das Wesentliche zählt), Recalls aus Abrechnungsziffern und der Medikationsabgleich nach Klinikaufenthalt.",
      "Souveränität als physischer Fakt: Zwei Ärzte betreiben bereits eigene Server; einer würde eher bei uns kaufen als bei einem Cloud-Anbieter — aus Datenschutzgründen.",
    ],
    en: [
      "The pain in primary care isn't diagnosis — it's documentation, the phone, bureaucracy, forgotten billing. That's exactly where the tools help.",
      "Validated in talks with two GPs: the incoming-letter flood (~600/week, only the essentials matter), recalls from billing codes, and medication reconciliation after a hospital stay.",
      "Sovereignty as a physical fact: two doctors already run their own servers; one would rather buy from us than a cloud vendor — on data-protection grounds.",
    ],
  },
};

export const ARCHITECTURE: ProseSection = {
  id: "architecture",
  title: { de: "Architektur & Daten", en: "Architecture & data" },
  paras: {
    de: [
      "Drei Schichten: die App (läuft im Browser), das Brain (Ihr Server — Datenbank, Dokumente, KI-Modell) und das Modell (läuft lokal auf Ihrer Hardware).",
      "Wo liegt es? Auf einem dedizierten Server in einem deutschen Rechenzentrum — oder auf Wunsch auf einem Gerät direkt in der Praxis. Die Patientendaten verlassen das Haus nicht.",
      "Beispiel Eingangspost: Der gescannte Brief wird im Browser gelesen; nur der extrahierte Text geht ans Brain auf Ihrem Server. Kein US-Cloud-Anbieter im Datenweg.",
      "Ehrlich zur Stufe: vollständig souverän = lokales Modell auf Ihrem Server. Nutzt eine Demo ausnahmsweise einen externen Modell-Dienst, sagen wir das ausdrücklich.",
    ],
    en: [
      "Three layers: the app (runs in the browser), the brain (your server — database, documents, AI model), and the model (runs locally on your hardware).",
      "Where does it live? A dedicated server in a German data center — or, on request, a box in the practice itself. Patient data does not leave the building.",
      "Eingangspost example: the scanned letter is read in the browser; only the extracted text goes to the brain on your server. No US cloud provider in the data path.",
      "Honest about the tier: fully sovereign = a local model on your server. If a demo exceptionally uses an external model service, we say so explicitly.",
    ],
  },
};

export const LEGAL: ProseSection = {
  id: "legal",
  title: { de: "Rechtliches", en: "Legal notes" },
  paras: {
    de: [
      "Datenschutz auf der Architektur-Ebene: Die Daten liegen lokal, ein Abfluss an Dritte oder US-Anbieter ist technisch nicht vorgesehen. Das löst das größte DSGVO-Problem — die konkrete DSGVO-Konformität für Ihren Einsatzzweck prüfen wir mit Datenschutzbeauftragtem/Anwalt. Kein pauschales Versprechen.",
      "§203 StGB (Schweigepflicht): Single-Tenant-Isolation ist eine rechtliche Notwendigkeit, kein Feature.",
      "Keine Diagnostik: nur Dokumentationsunterstützung, jeder Entwurf wird ärztlich freigegeben — damit außerhalb der Medizinprodukt-Einstufung (MDR).",
      "KI-Betreiberpflicht (EU AI Act): Mit KI-Einsatz werden Sie rechtlich zum Betreiber. Lokal + ärztliche Freigabe halten Ihre Haftungsfläche so klein wie möglich.",
      "Nachvollziehbarkeit & Löschung: Ein praxisweites Prüfprotokoll aller KI-Anfragen ist verfügbar (Werkzeug Protokoll, v1) — Zeit, Werkzeug, Modell und Anfrage, serverseitig. Dokumente und Sitzungen lassen sich löschen; eine Ein-Klick-Gesamtlöschung (DSGVO Art. 17) ist in Umsetzung.",
      "Hinweis: Die konkrete DSGVO- und MDR-Bewertung erfolgt mit einem Anwalt — kein Marketingversprechen.",
    ],
    en: [
      "Data protection at the architecture layer: data stays local; there is no path out to third parties or US providers by design. That solves the biggest GDPR problem — the concrete GDPR conformity for your use case is assessed with a data-protection officer/lawyer. Not a blanket promise.",
      "§203 StGB (confidentiality): single-tenant isolation is a legal necessity, not a feature.",
      "No diagnosis: documentation support only, every draft is doctor-approved — keeping it outside medical-device (MDR) classification.",
      "AI-operator duty (EU AI Act): using AI makes you the operator. Local + doctor approval keep your liability surface as small as possible.",
      "Traceability & deletion: a practice-wide audit log of all AI requests is available (the Protokoll tool, v1) — time, tool, model, query, server-side. Documents and sessions can be deleted; one-click full erasure (GDPR Art. 17) is in progress.",
      "Note: the concrete GDPR and MDR assessment is done with a lawyer — not a marketing promise.",
    ],
  },
};

export const ROADMAP: ProseSection = {
  id: "roadmap",
  title: { de: "Was wir noch bauen können", en: "What we can build next" },
  paras: {
    de: [
      "Der Kern ist kein fertiges Produkt, sondern: „Wir bauen, was Ihre Praxis braucht.“",
      "Auf Wunsch: Antrags-Assistent (Reha/Muster 61, Pflegegrad, Atteste), DMP-Vorbefüllung, Anrufbeantworter-Notizen, Verordnungsfähigkeit/Regress-Hinweis, Praxisübergabe-Zusammenfassung, ausstehende Befunde.",
      "Sagen Sie uns Ihren größten Zeitfresser — das nächste Werkzeug bauen wir dafür.",
    ],
    en: [
      "The core isn't a finished product, it's: \"we build what your practice needs.\"",
      "On request: forms/application assistant (Reha/Muster 61, care-level, certificates), DMP pre-fill, voicemail notes, reimbursability/Regress warning, practice-handover summary, pending-findings tracker.",
      "Tell us your biggest time-sink — we build the next tool for it.",
    ],
  },
};

export const PROSE_SECTIONS: ProseSection[] = [OVERVIEW, WHY, ARCHITECTURE, LEGAL, ROADMAP];

export interface Tool {
  de: { name: string; desc: string };
  en: { name: string; desc: string };
}

export const TOOLS: Tool[] = [
  { de: { name: "Eingangspost", desc: "Brief lesen (PDF-Upload oder eingefügter Text) → strukturierte Zusammenfassung. Auf Wunsch ein Antwortschreiben-Entwurf." }, en: { name: "Incoming mail", desc: "Read a letter (PDF upload or pasted text) → structured summary. Optionally a reply draft." } },
  { de: { name: "Recall", desc: "Aus Vorsorge-/Impf-/DMP-Ziffern automatisch den nächsten Termin." }, en: { name: "Recall", desc: "From check-up/vaccination/DMP codes, the next recall date automatically." } },
  { de: { name: "Medikationsabgleich", desc: "Klinikplan vs. Praxisliste — neu, abgesetzt, Dosis geändert." }, en: { name: "Medication reconciliation", desc: "Hospital plan vs practice list — new, stopped, dose changed." } },
  { de: { name: "Abrechnungs-Hilfe", desc: "Erinnert an vergessene, zustehende Ziffern. Nur Nachtragen." }, en: { name: "Billing helper", desc: "Reminds of forgotten, entitled codes. Only catching up." } },
  { de: { name: "Verordnungsfähigkeit", desc: "Hinweis: nicht Kassenrezept-fähig / genehmigungspflichtig / Rabattvertrag. Schützt vor Regress." }, en: { name: "Reimbursability", desc: "Flags: not GKV-reimbursable / needs approval / rebate contract. Regress protection." } },
  { de: { name: "Arztbrief-Entwurf", desc: "Aus Stichpunkten ein fertiger Briefentwurf zum Freigeben." }, en: { name: "Doctor's letter", desc: "From bullets, a finished letter draft to sign off." } },
  { de: { name: "Praxis-Wissen", desc: "Fragen an die eigenen QM-/Hygiene-/Ablauf-Dokumente, mit Quelle." }, en: { name: "Practice knowledge", desc: "Ask your own QM/hygiene/procedure docs, with source." } },
  { de: { name: "Patientenbrief", desc: "Befunde patientenverständlich — auf Wunsch übersetzt." }, en: { name: "Patient letter", desc: "Findings in plain language — translated on request." } },
  { de: { name: "CASE 1 (Lernwerkzeug)", desc: "Beispiel für klinisches Denken an synthetischen Fällen. Nicht für die Versorgung." }, en: { name: "CASE 1 (teaching)", desc: "Clinical-reasoning example on synthetic cases. Not for patient care." } },
  { de: { name: "Protokoll", desc: "Praxisweites Prüfprotokoll aller KI-Anfragen — Zeit, Werkzeug, Modell, Anfrage. Serverseitig (v1)." }, en: { name: "Audit log", desc: "Practice-wide audit log of every AI request — time, tool, model, query. Server-side (v1)." } },
];

export interface Faq {
  de: { q: string; a: string };
  en: { q: string; a: string };
}

export const FAQ: Faq[] = [
  { de: { q: "TIPP (intern): Unsicher bei einer Frage? Fragen Sie das Brain selbst.", a: "Öffnen Sie Praxis-Wissen und stellen Sie die Frage (etwa: Wo liegen die Daten?). Das Brain antwortet aus der hinterlegten Wissensbasis — und führt damit gleich das Produkt vor. Voraussetzung: das Wissensdokument ist geladen und der Pod ist aktiv." }, en: { q: "TIP (internal): Unsure on a question? Ask the brain itself.", a: "Open Praxis-Wissen and ask it (e.g. Where does the data live?). The brain answers from its loaded knowledge base — and demos the product at the same time. Requires: the knowledge doc loaded and the pod running." } },
  { de: { q: "Wo liegen meine Daten?", a: "Auf Ihrem eigenen Server in der Praxis. Sie verlassen die Praxis nicht." }, en: { q: "Where does my data live?", a: "On your own server in the practice. It doesn't leave." } },
  { de: { q: "Geht etwas an OpenAI oder Microsoft?", a: "Nein. Die KI läuft lokal. (Nur sagen, wenn das lokale Modell wirklich läuft.)" }, en: { q: "Does anything go to OpenAI/Microsoft?", a: "No. The AI runs locally. (Only say this when the local model is actually running.)" } },
  { de: { q: "Diagnostiziert die KI?", a: "Nein. Nur Entwürfe und Zusammenfassungen. Sie entscheiden; die Verantwortung bleibt bei Ihnen." }, en: { q: "Does the AI diagnose?", a: "No. Only drafts and summaries. You decide; responsibility stays with you." } },
  { de: { q: "Kann ich alles löschen?", a: "Dokumente und Sitzungen lassen sich löschen; eine Ein-Klick-Gesamtlöschung (Art. 17) ist in Umsetzung. Ihre Daten gehören Ihnen, kein Lock-in." }, en: { q: "Can I delete everything?", a: "Documents and sessions can be deleted; a one-click full erasure (Art. 17) is in progress. Your data is yours, no lock-in." } },
  { de: { q: "Kann ich nachvollziehen, was die KI tut?", a: "Ja — im Werkzeug Protokoll sehen Sie jede KI-Anfrage: Zeitpunkt, welches Werkzeug, welches Modell und die Anfrage. Praxisweit und serverseitig (v1)." }, en: { q: "Can I see what the AI did?", a: "Yes — the Protokoll tool shows every AI request: time, which tool, which model, and the query. Practice-wide and server-side (v1)." } },
  { de: { q: "Ist das DSGVO-konform?", a: "Der Datenschutz ist durch die Architektur gelöst; die konkrete Bewertung prüfen wir im Pilot gemeinsam." }, en: { q: "Is it GDPR-compliant?", a: "Data protection is solved by architecture; the concrete assessment we do together in the pilot." } },
  { de: { q: "Muss ich als Praxis etwas beachten (KI-Betreiber)?", a: "Mit KI-Einsatz werden Sie Betreiber — das verschweigen die meisten. Lokal + Freigabe = kleinste Haftungsfläche." }, en: { q: "Any operator duties on me?", a: "Using AI makes you the operator — most vendors hide this. Local + approval = smallest liability." } },
  { de: { q: "Funktioniert es mit meiner Praxissoftware (PVS)?", a: "Zum Start über GDT / Zwischenablage. Volle Rückschreibung klären wir mit dem Hersteller — versprochen erst, wenn geprüft." }, en: { q: "Does it work with my PVS?", a: "To start via GDT / clipboard. Full write-back we clarify with the vendor — promised only once verified." } },
  { de: { q: "Was kostet es?", a: "Pro Arbeitsplatz, nur die Module, die Sie brauchen. Als eine der ersten Praxen vergünstigt." }, en: { q: "What does it cost?", a: "Per workstation, only the modules you need. Discounted as one of the first practices." } },
  { de: { q: "Ersetzt es Personal?", a: "Nein. Wir nehmen der MFA nur die stumpfe Dokumentationsarbeit ab." }, en: { q: "Does it replace staff?", a: "No. It only takes the dull documentation work off the assistant." } },
];

/**
 * Downloadable / copyable example files, grouped by the tool they feed. Files
 * live in public/beispiele/ and are served alongside the app bundle (relative
 * href + the download attribute — the host iframe now carries allow-downloads).
 * Paste-text exemplars use the clipboard instead (works inside the sandbox).
 */
export interface DemoFile { href: string; label: string; }
export interface DemoAsset {
  tool: string;
  how: { de: string; en: string };
  files?: DemoFile[];
  copy?: { label: { de: string; en: string }; text: string };
}

export const DEMO_ASSETS: DemoAsset[] = [
  {
    tool: "Eingangspost",
    how: {
      de: "PDF in Eingangspost hochladen — oder den Beispieltext kopieren und in die „Text einfügen“-Box einfügen.",
      en: "Upload the PDF in Eingangspost — or copy the sample text and paste it into the “Text einfügen” box.",
    },
    files: [{ href: "beispiele/entlassbrief-beispielmann.pdf", label: "entlassbrief-beispielmann.pdf" }],
    copy: {
      label: { de: "Beispiel-Brief kopieren", en: "Copy sample letter" },
      text: "Sehr geehrte Kollegin, wir sahen Ihren Patienten Herrn Klein am 12.06.2026 in der kardiologischen Sprechstunde. Diagnosen: arterielle Hypertonie, beginnende Herzinsuffizienz (NYHA II). Empfehlung: Beginn mit Ramipril 2,5 mg, Kontrolle der Nierenwerte in 2 Wochen, echokardiographische Verlaufskontrolle in 3 Monaten. Mit kollegialen Grüßen, Dr. Weber.",
    },
  },
  {
    tool: "Praxis-Wissen",
    how: {
      de: "Diese QM-Dokumente einmalig über den Patientenakten-Tab hochladen — danach beantwortet Praxis-Wissen Fragen mit Quellenangabe.",
      en: "Upload these QM documents once via the Patientenakten tab — then Praxis-Wissen answers questions with sources.",
    },
    files: [
      { href: "beispiele/hygieneplan.md", label: "hygieneplan.md" },
      { href: "beispiele/nadelstichverletzung.md", label: "nadelstichverletzung.md" },
      { href: "beispiele/urlaubs-und-vertretungsregelung.md", label: "urlaubs-und-vertretungsregelung.md" },
      { href: "beispiele/rezeptwunsch-ablauf.md", label: "rezeptwunsch-ablauf.md" },
      { href: "beispiele/notfallplan.md", label: "notfallplan.md" },
      { href: "beispiele/so-funktioniert-hbar-health.md", label: "so-funktioniert-hbar-health.md" },
    ],
  },
  {
    tool: "Arztbrief",
    how: {
      de: "Stichpunkte in die Arztbrief-Felder eintragen (oder diesen Beispielsatz als Orientierung kopieren), dann Entwurf erstellen.",
      en: "Enter bullet points into the Arztbrief fields (or copy this sample as a guide), then generate a draft.",
    },
    copy: {
      label: { de: "Beispiel-Stichpunkte kopieren", en: "Copy sample bullets" },
      text: "Hauptproblem: Akute Bronchitis bei bekannter COPD. Beschwerden: Husten mit gelblichem Auswurf, Belastungsdyspnoe, kein Fieber. Verlauf: akut. Vorerkrankungen: COPD GOLD II, arterielle Hypertonie. Medikation: Ramipril 5 mg 1-0-0, Salbutamol bei Bedarf. Unsicherheit: mittel.",
    },
  },
  {
    tool: "Patientenbrief",
    how: {
      de: "Diesen Text in die Quelle-Box einfügen, eine Sprache wählen (z. B. Einfaches Deutsch), dann Patientenbrief erstellen.",
      en: "Paste this text into the source box, pick a language (e.g. plain German), then generate the patient letter.",
    },
    copy: {
      label: { de: "Beispiel-Befund kopieren", en: "Copy sample findings" },
      text: "Diagnose: neu festgestelltes Vorhofflimmern. Wir haben mit der blutverdünnenden Therapie Apixaban 5 mg zweimal täglich begonnen, um Schlaganfälle zu verhindern. Kontrolle beim Kardiologen in vier Wochen. Bitte täglich den Puls fühlen. Bei plötzlicher Luftnot, Brustschmerz oder einseitiger Schwäche sofort den Notruf 112 wählen.",
    },
  },
];
