import { useState } from "react";

export default function ContactForm() {
  const [selectedCommunicationMethod, setSelectedCommunicationMethod] =
    useState("none");
  const inputClassList =
    "input-bordered input w-full rounded-lg border-gray-200 p-3 text-sm";

  return (
    <form
      action="https://formsubmit.co/1b7806c7f0151399481f22792447a388"
      method="POST"
      className="space-y-4"
    >
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
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="label">
            <span className="label-text text-black">Email Address</span>
          </label>
          <input
            className={inputClassList}
            placeholder="Email address"
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text text-black">Phone Number</span>
          </label>
          <input
            className={inputClassList}
            placeholder="Phone Number"
            type="tel"
            name="phone"
            id="phone"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="label">
            <span className="label-text">Preferred communication method</span>
          </label>
          <select
            className="select-primary select w-72 max-w-6xl border-opacity-20 font-normal"
            name="Preffered communication method"
            value={selectedCommunicationMethod}
            onChange={(e) => {
              setSelectedCommunicationMethod(e.target.value);
              console.log(e.target.value);
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
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="label">
            <span className="label-text text-black">Gender (Optional)</span>
          </label>
          <select
            className="select-primary select w-72 max-w-6xl border-opacity-20 font-normal"
            name="Preffered communication method"
            defaultValue={0}
          >
            <option disabled={true}>Your Gender</option>
            <option>Man</option>
            <option>Woman</option>
            <option>Non-Binary</option>
            <option>Transgender</option>
            <option>Other</option>
            <option>Prefer not to say</option>
          </select>
        </div>

        <div>
          <label className="label">
            <span className="label-text text-black">Age (Optional)</span>
          </label>
          <input
            className={inputClassList}
            placeholder="Your age"
            type="text"
            name="Age"
            id="age"
          />
        </div>
      </div>

      <div>
        <div className="form-control">
          <h4 className="pb-2">
            What are your main concerns? You can select all that apply
          </h4>
          <h4 className="label-text-alt pb-2">
            You can hover over any item to view its description
          </h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {getAdhdSymptomsHTMLBlock()}
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Message"
            rows={8}
            name="message"
            id="message"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

function getAdhdSymptomsHTMLBlock(): JSX.Element[] {
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

  const adhdSymptomsBlock: JSX.Element[] = [];

  Object.entries(adhdSymptomsMap).forEach(([symptom, desc]) => {
    adhdSymptomsBlock.push(
      <label className="label cursor-pointer" key={symptom}>
        <div
          className="tooltip text-start"
          style={
            {
              "--tooltip-color": "#EEE",
              "--tooltip-text-color": "#000",
            } as React.CSSProperties
          }
          data-tip={desc}
        >
          <span className="label-text pe-5 font-semibold">{symptom}</span>
        </div>
        <input type="checkbox" className="checkbox" name={symptom} />
      </label>
    );
  });

  return adhdSymptomsBlock;
}
