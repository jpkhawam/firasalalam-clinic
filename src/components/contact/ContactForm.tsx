import { useState } from "react";
import { t } from "i18next";
import Input from "./Input";
import Modal from "./Modal";
import Select from "./Select";
import Checkbox from "./Checkbox";

export default function ContactForm() {
  const [selectedPerson, setSelectedPerson] = useState("Myself");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [selectedCommunicationMethod, setSelectedCommunicationMethod] =
    useState("none");

  return (
    <>
      <form
        action="https://formsubmit.co/6db798b9497aacecf3e3420d187f9e43"
        method="POST"
        className="space-y-4 text-black dark:text-white"
      >
        <input
          type="hidden"
          name="_next"
          value="https://firasalalam.clinic/thanks"
        />
        <input
          id="email-subject"
          type="hidden"
          name="_subject"
          value={`New submission from ${emailInputValue}`}
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" style={{ display: "none" }} />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Select
            labelText="I am here for"
            name="I am here for"
            value={selectedPerson}
            onChange={(e) => {
              setSelectedPerson(e.target.value);
            }}
            required={true}
            options={["Myself", "Someone else"]}
            placeholderOptionText="I am here for"
            placeholderOptionValue="none"
          />

          {selectedPerson === "Someone else" && (
            <Input
              labelText="What is your relationship to that person?"
              placeholder="e.g. I'm the mother, caregiver, friend, etc"
              type="text"
              id="lastName"
              name="Last Name"
              required={true}
            />
          )}
        </div>

        {selectedPerson === "Myself" && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                labelText="First Name"
                placeholder="First Name"
                type="text"
                id="firstName"
                name="First Name"
                required={true}
              />

              <Input
                labelText="Last Name"
                placeholder="Last Name"
                type="text"
                id="lastName"
                name="Last Name"
                required={true}
              />

              <Select
                labelText="Gender"
                name="I identify as a"
                defaultValue={0}
                options={genderOptions}
                placeholderOptionText="I identify as"
                placeholderOptionValue={0}
                required={true}
              />

              <Input
                labelText="Date of birth"
                type="date"
                name="Date of Birth"
                id="dateOfBirth"
                required={true}
              />

              <Input
                labelText="Country of residence"
                placeholder="e.g. Lebanon"
                type="text"
                id="country"
                name="country of residence"
                required={true}
              />

              <Input
                labelText="Email Address"
                placeholder="email@example.com"
                type="email"
                id="email"
                name="email"
                required={true}
                value={emailInputValue}
                onChange={(e) => {
                  setEmailInputValue(e.target.value);
                }}
              />

              <Input
                labelText="Phone Number"
                labelTextAlt="(Include country code)"
                placeholder="e.g. +961 70123456"
                type="tel"
                name="phone"
                id="phone"
                required={true}
              />

              <Select
                labelText="Preferred communication method"
                name="Preffered communication method"
                value={selectedCommunicationMethod}
                onChange={(e) => {
                  setSelectedCommunicationMethod(e.target.value);
                }}
                required={true}
                placeholderOptionText="Preferred Communication Method"
                placeholderOptionValue="none"
                options={["Phone", "Email", "Telegram", "Whatsapp"]}
              />
            </div>

            {selectedCommunicationMethod === "Phone" && (
              <Input
                labelText="Best time to contact you"
                placeholder="Days of week, time of day, etc"
                type="text"
                name="Best time to contact"
                id="bestTimeToContact"
                required={true}
              />
            )}
          </>
        )}

        {selectedPerson === "Someone else" && (
          <>
            <div
              className="divider divider-vertical mx-auto w-4/5"
              aria-hidden={true}
            ></div>
            <div className="text-center text-sm font-bold sm:text-base">
              Please fill this section with{" "}
              <span className="underline"> your personal information.</span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                labelText="First Name"
                placeholder="First Name"
                type="text"
                id="firstName"
                name="First Name"
                required={true}
              />

              <Input
                labelText="Last Name"
                placeholder="Last Name"
                type="text"
                id="lastName"
                name="Last Name"
                required={true}
              />

              <Select
                labelText="Gender"
                name="I identify as a"
                defaultValue={0}
                required={true}
                options={genderOptions}
                placeholderOptionText="I identify as"
                placeholderOptionValue={0}
              />

              <Input
                labelText="Country of residence"
                placeholder="e.g. Lebanon"
                type="text"
                id="country"
                name="country of residence"
                required={true}
              />

              <Input
                labelText="Email Address"
                placeholder="email@example.com"
                type="email"
                id="email"
                name="email"
                required={true}
              />

              <Input
                labelText="Phone Number"
                labelTextAlt="(Include country code)"
                placeholder="e.g. +961 70123456"
                type="tel"
                name="phone"
                id="phone"
                required={true}
              />

              <Select
                labelText="Preferred communication method"
                name="Preffered communication method"
                value={selectedCommunicationMethod}
                onChange={(e) => {
                  setSelectedCommunicationMethod(e.target.value);
                }}
                required={true}
                placeholderOptionText="Preferred Communication Method"
                placeholderOptionValue="none"
                options={["Phone", "Email", "Telegram", "Whatsapp"]}
              />

              {selectedCommunicationMethod === "Phone" && (
                <Input
                  labelText="Best time to contact you"
                  placeholder="Days of week, time of day, etc"
                  type="text"
                  name="Best time to contact"
                  id="bestTimeToContact"
                  required={true}
                />
              )}
            </div>

            <div
              className="divider divider-vertical mx-auto w-4/5"
              aria-hidden={true}
            ></div>

            <div className="text-center text-sm font-bold sm:text-base">
              Please fill this section with the information of{" "}
              <span className="underline">the person you are here for.</span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                labelText="First Name"
                placeholder="First Name"
                type="text"
                id="firstName"
                name="Patient's First Name"
                required={true}
              />

              <Input
                labelText="Last Name"
                placeholder="Last Name"
                type="text"
                id="lastName"
                name="Patient's Last Name"
                required={true}
              />

              <Select
                labelText="Gender"
                name="Patient identifies as a"
                defaultValue={0}
                options={genderOptions}
                placeholderOptionText="Identifies as"
                placeholderOptionValue={0}
                required={true}
              />

              <Input
                labelText="Date of Birth"
                type="date"
                name="Patient's date of birth"
                id="patient-date-of-birth"
                required={true}
              />
            </div>
          </>
        )}

        <div>
          <div className="form-control">
            <input type="hidden" name="My main concerns are:" />

            <div
              className="divider divider-vertical mx-auto w-4/5"
              aria-hidden={true}
            ></div>
            <h4 className="pb-2">
              What are your main concerns? Select all that apply.
            </h4>
            <h4 className="label-text-alt pb-2 text-sm italic">
              You can click on the{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-label="info"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              icon to learn more about an item
            </h4>
            <div className="grid grid-cols-1 gap-4 sm:w-5/6 sm:grid-cols-1 md:w-3/5 lg:w-5/6">
              {Array.from(adhdSymptomsMap).map(([symptom, _]) => (
                <Checkbox name={symptom} key={symptom} />
              ))}
            </div>
            <input type="hidden" name="--------------" />
            <div
              className="divider divider-vertical mx-auto w-4/5"
              aria-hidden={true}
            ></div>
          </div>

          <div>
            <label className="label">
              <span className="label-text dark:text-white">
                Additional notes (Optional)
              </span>
            </label>
            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm focus:border-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-base-200 dark:bg-base-200 dark:placeholder:text-gray-300 dark:focus:border-brand"
              placeholder="You can add additional notes that you think I should know about here."
              rows={8}
              name="message"
              id="message"
            />
          </div>
          <div className="mt-4">
            <button
              className="inset-0 me-12 border-2 border-black bg-black px-8 py-3 text-sm uppercase tracking-widest text-white transition-colors duration-300 [font-weight:800;] hover:bg-white hover:text-black dark:hidden"
              onClick={submit}
              type="submit"
              id="submit-button"
            >
              Submit
            </button>

            <button
              onClick={submit}
              type="submit"
              id="submit-button"
              className="group relative hidden rounded dark:inline-block"
            >
              <span className="absolute inset-0 translate-x-1 translate-y-0.5 rounded-full bg-brand transition-transform"></span>
              <span className="relative inline-block rounded-full border-2 border-brand bg-custom-gray px-8 py-3 text-center text-sm font-bold uppercase tracking-widest text-brand group-hover:translate-x-1 group-hover:translate-y-0.5 group-active:text-opacity-75">
                Submit
              </span>
            </button>
          </div>
        </div>
      </form>
      {Array.from(adhdSymptomsMap).map(([symptom, desc]) => (
        <Modal symptom={symptom} desc={desc} key={symptom} />
      ))}
    </>
  );
}

function submit() {
  const hiddenInput = document.getElementById(
    "email-subject"
  ) as HTMLInputElement;
  const emailInput = document.getElementById("email-input") as HTMLInputElement;
  hiddenInput.value += emailInput.value;
}

const genderOptions = [
  "Man",
  "Woman",
  "Non-Binary person",
  "Transgender man",
  "Transgender woman",
  "Other",
  "Prefer not to say",
];

const adhdSymptomsMap: Map<string, string> = new Map([
  [
    "Inattention",
    "Difficulty paying attention, staying focused, and sustaining concentration on tasks or activities, particularly those that are repetitive or less stimulating.",
  ],
  [
    "Hyperactivity",
    "Restlessness, excessive motor activity, and difficulty sitting still. Frequent fidgeting, tapping your feet, or a constant need for movement.",
  ],
  [
    "Impulsivity",
    "Acting on immediate impulses without considering potential consequences. Impulsive behaviors can manifest as interrupting others, blurting out answers, or engaging in risky activities without thinking them through.",
  ],
  [
    "Organization and Time Management",
    "Challenges in organizing tasks, materials, and belongings.",
  ],
  [
    "Executive Functioning",
    "Impairments in executive functions, which include skills such as problem-solving, decision-making, self-regulation, and working memory.",
  ],
  [
    "Emotional Regulation",
    "Difficulty regulating emotions and managing frustration, leading to mood swings, irritability, and a tendency to become easily overwhelmed or frustrated.",
  ],
  [
    "Social Interactions",
    "Challenges in social interactions, such as difficulties in taking turns, listening actively, or maintaining appropriate personal space. This can impact the development of friendships and relationships.",
  ],
  [
    "Impaired Memory and Forgetfulness",
    "Struggles with short-term memory and forgetfulness, which can affect remembering instructions, completing tasks, and recalling important information.",
  ],
  [
    "Academic Underachievement",
    "Difficulties in academic settings, including poor concentration during lectures, challenges with organization and completing assignments, and lower academic performance compared to peers.",
  ],
]);
