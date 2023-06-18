import { useState } from "react";

export default function ContactForm() {
  const [selectedPerson, setSelectedPerson] = useState("Myself");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [selectedCommunicationMethod, setSelectedCommunicationMethod] =
    useState("none");
  const inputClassList =
    "input-bordered input w-full rounded-lg border-gray-200 p-3 text-sm focus:ring-0 focus:ring-offset-0 focus:outline-none";

  return (
    <>
      <form
        action="https://formsubmit.co/6db798b9497aacecf3e3420d187f9e43"
        method="POST"
        className="space-y-4"
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
          <div>
            <label className="label">
              <span className="label-text text-black">I am here for</span>
            </label>
            <select
              className="select-primary select w-full max-w-6xl border-opacity-20 font-normal focus:outline-none focus:ring-0 focus:ring-offset-0"
              name="I am here for"
              value={selectedPerson}
              onChange={(e) => {
                setSelectedPerson(e.target.value);
              }}
              required={true}
            >
              <option disabled={true} value="none">
                I am here for
              </option>
              <option value="Myself">Myself</option>
              <option value="Someone else">Someone else</option>
            </select>
          </div>

          {selectedPerson === "Someone else" && (
            <div>
              <label className="label">
                <span className="label-text text-black">
                  What is your relationship to that person?
                </span>
              </label>
              <input
                className={inputClassList}
                placeholder="e.g. I'm the mother, caregiver, friend, etc"
                type="text"
                id="lastName"
                name="Last Name"
                required={true}
              />
            </div>
          )}
        </div>

        {selectedPerson === "Myself" && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="label">
                  <span className="label-text text-black">First Name</span>
                </label>
                <input
                  className={inputClassList}
                  placeholder="First Name"
                  type="text"
                  id="firstName"
                  name="First Name"
                  required={true}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-black">Last Name</span>
                </label>
                <input
                  className={inputClassList}
                  placeholder="Last Name"
                  type="text"
                  id="lastName"
                  name="Last Name"
                  required={true}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-black">Gender</span>
                </label>
                <select
                  className="select-primary select w-full max-w-6xl border-opacity-20 font-normal focus:outline-none focus:ring-0 focus:ring-offset-0"
                  name="I identify as a"
                  defaultValue={0}
                >
                  <option disabled={true} value={0}>
                    I identify as
                  </option>
                  <option>Man</option>
                  <option>Woman</option>
                  <option>Non-Binary person</option>
                  <option>Transgender man</option>
                  <option>Transgender woman</option>
                  <option>Other</option>
                  <option>Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-black">Date of birth</span>
                </label>
                <input
                  className={inputClassList}
                  type="date"
                  name="Date of Birth"
                  id="dateOfBirth"
                  required={true}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-black">
                    Country of residence
                  </span>
                </label>
                <input
                  className={inputClassList}
                  placeholder="e.g. Lebanon"
                  type="text"
                  id="country"
                  name="country of residence"
                  required={true}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-black">Email Address</span>
                </label>
                <input
                  className={inputClassList}
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
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-black">
                    Phone Number{" "}
                    <span className="label-text-alt italic">
                      (Include country code)
                    </span>
                  </span>
                </label>
                <input
                  className={inputClassList}
                  placeholder="e.g. +961 70123456"
                  type="tel"
                  name="phone"
                  id="phone"
                  required={true}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">
                    Preferred communication method
                  </span>
                </label>
                <select
                  className="select-primary select w-full max-w-6xl border-opacity-20 font-normal focus:outline-none focus:ring-0 focus:ring-offset-0"
                  name="Preffered communication method"
                  value={selectedCommunicationMethod}
                  onChange={(e) => {
                    setSelectedCommunicationMethod(e.target.value);
                  }}
                >
                  <option disabled={true} value="none">
                    Preferred Communication Method
                  </option>
                  <option value="Phone">Phone</option>
                  <option value="Email">Email</option>
                  <option value="Telegram">Telegram</option>
                  <option value="Whatsapp">Whatsapp</option>
                </select>
              </div>
            </div>

            {selectedCommunicationMethod === "Phone" && (
              <div>
                <label className="label">
                  <span className="label-text text-black">
                    Best time to contact you
                  </span>
                </label>
                <input
                  className={inputClassList}
                  placeholder="Days of week, time of day, etc"
                  type="text"
                  name="Best time to contact"
                  id="bestTimeToContact"
                  required={true}
                />
              </div>
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
              <span className="underline"> your personal information.</span>{" "}
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="label">
                  <span className="label-text text-black">First Name</span>
                </label>
                <input
                  className={inputClassList}
                  placeholder="First Name"
                  type="text"
                  id="firstName"
                  name="First Name"
                  required={true}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-black">Last Name</span>
                </label>
                <input
                  className={inputClassList}
                  placeholder="Last Name"
                  type="text"
                  id="lastName"
                  name="Last Name"
                  required={true}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-black">Gender</span>
                </label>
                <select
                  className="select-primary select w-full max-w-6xl border-opacity-20 font-normal focus:outline-none focus:ring-0 focus:ring-offset-0"
                  name="I identify as a"
                  defaultValue={0}
                >
                  <option disabled={true} value={0}>
                    I identify as
                  </option>
                  <option>Man</option>
                  <option>Woman</option>
                  <option>Non-Binary person</option>
                  <option>Transgender man</option>
                  <option>Transgender woman</option>
                  <option>Other</option>
                  <option>Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-black">
                    Country of residence
                  </span>
                </label>
                <input
                  className={inputClassList}
                  placeholder="e.g. Lebanon"
                  type="text"
                  id="country"
                  name="country of residence"
                  required={true}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-black">Email Address</span>
                </label>
                <input
                  className={inputClassList}
                  placeholder="email@example.com"
                  type="email"
                  id="email"
                  name="email"
                  required={true}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-black">
                    Phone Number{" "}
                    <span className="label-text-alt italic">
                      (Include country code)
                    </span>
                  </span>
                </label>
                <input
                  className={inputClassList}
                  placeholder="e.g. +961 70123456"
                  type="tel"
                  name="phone"
                  id="phone"
                  required={true}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">
                    Preferred communication method
                  </span>
                </label>
                <select
                  className="select-primary select w-full max-w-6xl border-opacity-20 font-normal focus:outline-none focus:ring-0 focus:ring-offset-0"
                  name="Preffered communication method"
                  value={selectedCommunicationMethod}
                  onChange={(e) => {
                    setSelectedCommunicationMethod(e.target.value);
                  }}
                >
                  <option disabled={true} value="none">
                    Preferred Communication Method
                  </option>
                  <option value="Phone">Phone</option>
                  <option value="Email">Email</option>
                  <option value="Telegram">Telegram</option>
                  <option value="Whatsapp">Whatsapp</option>
                </select>
              </div>

              {selectedCommunicationMethod === "Phone" && (
                <div>
                  <label className="label">
                    <span className="label-text text-black">
                      Best time to contact you
                    </span>
                  </label>
                  <input
                    className={inputClassList}
                    placeholder="Days of week, time of day, etc"
                    type="text"
                    name="Best time to contact"
                    id="bestTimeToContact"
                    required={true}
                  />
                </div>
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
              <div>
                <label className="label">
                  <span className="label-text text-black">First Name</span>
                </label>
                <input
                  className={inputClassList}
                  placeholder="First Name"
                  type="text"
                  id="firstName"
                  name="Patient's First Name"
                  required={true}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-black">Last Name</span>
                </label>
                <input
                  className={inputClassList}
                  placeholder="Last Name"
                  type="text"
                  id="lastName"
                  name="Patient's Last Name"
                  required={true}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-black">Gender</span>
                </label>
                <select
                  className="select-primary select w-full max-w-6xl border-opacity-20 font-normal focus:outline-none focus:ring-0 focus:ring-offset-0"
                  name="Patient identifies as a"
                  defaultValue={0}
                >
                  <option disabled={true} value={0}>
                    Identifies as
                  </option>
                  <option>Man</option>
                  <option>Woman</option>
                  <option>Non-Binary person</option>
                  <option>Transgender man</option>
                  <option>Transgender woman</option>
                  <option>Other</option>
                  <option>Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-black">Date of Birth</span>
                </label>
                <input
                  className={inputClassList}
                  type="date"
                  name="Patient's date of birth"
                  id="patient-date-of-birth"
                  required={true}
                />
              </div>
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
              {getAdhdSymptomsHTMLBlock()}
            </div>
            <input type="hidden" name="--------------" />
            <div
              className="divider divider-vertical mx-auto w-4/5"
              aria-hidden={true}
            ></div>
          </div>

          <div>
            <label className="label">
              <span className="label-text text-black">
                Additional notes (Optional)
              </span>
            </label>
            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="You can add additional notes that you think I should know about here."
              rows={8}
              name="message"
              id="message"
            />
          </div>
          <div className="mt-4">
            <button
              className="group relative me-12"
              onClick={() => {
                const hiddenInput = document.getElementById(
                  "email-subject"
                ) as HTMLInputElement;
                const emailInput = document.getElementById(
                  "email-input"
                ) as HTMLInputElement;
                hiddenInput.value += emailInput.value;
              }}
              type="submit"
              id="submit-button"
            >
              <span className="inset-0 inline-block border-2 border-black bg-black px-8 py-3 text-sm uppercase tracking-widest text-white transition-transform [font-weight:800;] group-hover:bg-white group-hover:text-black">
                Submit
              </span>
            </button>
          </div>
        </div>
      </form>
      <div>{getModalsHTMLBlock()}</div>
    </>
  );
}

function getAdhdSymptomsHTMLBlock(): JSX.Element[] {
  const adhdSymptomsBlock: JSX.Element[] = [];

  Object.entries(adhdSymptomsMap).forEach(([symptom, desc]) => {
    adhdSymptomsBlock.push(
      <label className="label cursor-pointer" key={symptom}>
        <div>
          <svg
            onClick={() => {
              if (navigator.userAgent.match(/chrome|chromium|crios/i)) {
                const checkbox = document.getElementById(
                  `checkbox${symptom}`
                ) as HTMLInputElement;
                checkbox.checked = !checkbox.checked;
              }
              const modal = document.getElementById(
                `modal-${symptom}`
              ) as HTMLDialogElement;
              modal.showModal();
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="inline-flex h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="label-text pe-5 ps-3 font-semibold">{symptom}</span>
        </div>
        <input
          id={`checkbox${symptom}`}
          type="checkbox"
          className="checkbox focus:outline-none focus:ring-0 focus:ring-offset-0"
          name={symptom}
          aria-label={`Toggle ${symptom}`}
        />
      </label>
    );
  });

  return adhdSymptomsBlock;
}

function getModalsHTMLBlock(): JSX.Element[] {
  const modalsBlock: JSX.Element[] = [];

  Object.entries(adhdSymptomsMap).forEach(([symptom, desc]) => {
    modalsBlock.push(
      <dialog id={`modal-${symptom}`} className="modal" key={`modal${symptom}`}>
        <form method="dialog" className="modal-box">
          <button className="btn-ghost btn-sm btn-circle btn absolute right-3 top-3">
            ✕
          </button>
          <h3 className="mt-5 text-lg font-bold">{symptom}</h3>
          <p className="mb-2 py-4">{desc}</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    );
  });

  return modalsBlock;
}

const adhdSymptomsMap = {
  Inattention:
    "Difficulty paying attention, staying focused, and sustaining concentration on tasks or activities, particularly those that are repetitive or less stimulating.",
  Hyperactivity:
    "Restlessness, excessive motor activity, and difficulty sitting still. Frequent fidgeting, tapping your feet, or a constant need for movement.",
  Impulsivity:
    "Acting on immediate impulses without considering potential consequences. Impulsive behaviors can manifest as interrupting others, blurting out answers, or engaging in risky activities without thinking them through.",
  "Organization and Time Management":
    "Challenges in organizing tasks, materials, and belongings.",
  "Executive Functioning":
    "Impairments in executive functions, which include skills such as problem-solving, decision-making, self-regulation, and working memory.",
  "Emotional Regulation":
    "Difficulty regulating emotions and managing frustration, leading to mood swings, irritability, and a tendency to become easily overwhelmed or frustrated.",
  "Social Interactions":
    "Challenges in social interactions, such as difficulties in taking turns, listening actively, or maintaining appropriate personal space. This can impact the development of friendships and relationships.",
  "Impaired Memory and Forgetfulness":
    "Struggles with short-term memory and forgetfulness, which can affect remembering instructions, completing tasks, and recalling important information.",
  "Academic Underachievement":
    "Difficulties in academic settings, including poor concentration during lectures, challenges with organization and completing assignments, and lower academic performance compared to peers.",
};
