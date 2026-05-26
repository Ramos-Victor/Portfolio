const SkillCard = ({ item, language }) => {
  const Icon = item.icon;

  return (
    <article className="glass rounded-2xl p-5">
      <Icon className="mb-4 h-6 w-6 text-brand-400" />
      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title[language]}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">{item.description[language]}</p>
    </article>
  );
};

export default SkillCard;
