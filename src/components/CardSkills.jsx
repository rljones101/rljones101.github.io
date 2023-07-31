import CustomIcon from "./CustomIcon";

export default function CardSkills({ customIcon, icon, title, skills }) {
  let iconArr = [];
  let type = "";
  let iconName = "";

  if (icon) {
    iconArr = icon.split(",");
    [type, iconName] = iconArr;
  }

  return (
    <div className="flex-1 bg-white shadow-lg  p-8 border-t-4 border-blue-500">
      <div>
        {type && iconName && (
          <i className={`fa-${type} fa-${iconName} text-3xl text-blue-500`}></i>
        )}
        {customIcon && (
          <CustomIcon
            icon={customIcon}
            className="text-3xl fill-blue-500 block mb-1"
          />
        )}
        <h3 className="font-bold text-black text-lg">{title}</h3>
      </div>
      <ul>
        {skills.split(",").map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
