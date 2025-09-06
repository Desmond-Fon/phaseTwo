// components/ProfileForm.js
import InputField from "./InputField";
import Button from "./Button";

const ProfileForm = ({ user }) => {
  return (
    <form className="space-y-6">
      <InputField label="Full Name" value={user.name} onChange={() => {}} />
      <InputField
        label="Email"
        type="email"
        value={user.email}
        onChange={() => {}}
      />
      <div className="flex justify-center">
        <Button variant="primary">Save Changes</Button>
      </div>
    </form>
  );
};

export default ProfileForm;
