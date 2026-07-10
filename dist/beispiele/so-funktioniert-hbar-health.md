# So funktioniert hbar.health — Datenschutz, Architektur, Anbindung
Interne Wissensbasis für das Praxis-Brain. Damit kann das System Fragen zu sich
selbst beantworten (Praxis-Wissen / Konsil). Aussagen sind ehrlich gehalten;
rechtliche Punkte werden mit Anwalt geprüft und sind kein pauschales Versprechen.

## Was ist hbar.health?
Eine private, lokale KI für die Praxis. Sie läuft auf einem Server, den die Praxis
kontrolliert — kein OpenAI, kein Microsoft, keine Cloud. Darauf laufen kleine
Werkzeuge (Brain-Apps), die je eine tägliche Aufgabe abnehmen: eingehende Briefe
lesen und zuordnen, Recalls setzen, Medikationspläne abgleichen, Arztbriefe als
Entwurf schreiben, Fragen an die eigenen Praxis-Dokumente beantworten.
Grundregel: Die KI erstellt nur Entwürfe. Der Arzt prüft und entscheidet. Keine Diagnostik.

## Wo liegen die Daten?
Auf dem eigenen Server der Praxis — in einem deutschen Rechenzentrum oder auf
Wunsch auf einem Gerät in der Praxis. Die Patientendaten verlassen das Haus nicht.
Beispiel Eingangspost: Der gescannte Brief wird im Browser gelesen; nur der Text
geht an das Brain auf dem Praxis-Server. Kein US-Cloud-Anbieter im Datenweg.

## Wie ist das mit dem Datenschutz (DSGVO)?
Der Datenschutz ist auf der Architektur-Ebene gelöst: Die Daten liegen lokal, ein
Abfluss an Dritte ist technisch nicht vorgesehen. Das löst das größte DSGVO-Problem.
Die konkrete DSGVO-Konformität für den jeweiligen Einsatzzweck wird gemeinsam mit
einem Datenschutzbeauftragten bzw. Anwalt geprüft — das ist Teil des Projekts und
kein pauschales Versprechen. Relevant: DSGVO Art. 9, §203 StGB (Schweigepflicht),
die Single-Tenant-Isolation macht das zu einer rechtlichen Notwendigkeit.

## Diagnostiziert die KI? Ist das ein Medizinprodukt?
Nein. Die Werkzeuge leisten nur Dokumentations- und Verwaltungsunterstützung.
Jeder Entwurf wird ärztlich freigegeben. Dadurch bleibt es außerhalb der
Medizinprodukt-Einstufung (MDR). Die Verantwortung bleibt zu 100 % beim Arzt.

## Wie funktioniert die Anbindung an die Praxissoftware (PVS)?
Zum Start über Kopieren in die Zwischenablage oder GDT-Export (die Standard-
Schnittstelle). Eine tiefere Rückschreibung in das PVS wird direkt mit dem
Hersteller geklärt — z. B. über GDT-Dateien oder die medatixx HealthHub (FHIR).
Ein direkter Datenbankzugriff findet nicht statt. Integration wird erst
versprochen, wenn sie geprüft ist.

## Ersetzt es Personal? Ist es eine Telefon-KI?
Nein und nein. Es ersetzt kein Personal und macht keine Telefon-KI. Es nimmt der
MFA die stumpfe Dokumentationsarbeit ab — Briefe lesen, zuordnen, Erinnerungen setzen.

## Nachvollziehbarkeit und Löschung
KI-Aktionen werden protokolliert. Ein vollständiges, praxisweites Prüfprotokoll
und eine Ein-Klick-Gesamtlöschung (DSGVO Art. 17) sind in Umsetzung. Dokumente und
Sitzungen lassen sich löschen; die Daten gehören der Praxis, kein Lock-in.

## Betrieb und Kosten (grob)
Abrechnung pro Arbeitsplatz, modular — nur die Werkzeuge, die gebraucht werden.
Betrieb entweder auf einem Gerät in der Praxis (einmalige Anschaffung) oder auf
einem dedizierten EU-Server (monatlich). Als eine der ersten Praxen vergünstigt.
