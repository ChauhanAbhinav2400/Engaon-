import React, { useState } from 'react';
import { X, Clock, Users, Sparkles } from 'lucide-react';

export default function RecipeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState(0);

  const recipes = [
    {
      title: 'Traditional Gud Wali Chai',
      category: 'Beverage',
      prepTime: '10 mins',
      servings: '2 cups',
      description: 'The soul-warming village winter tea prepared with aromatic spices and authentic Dhampur jaggery.',
      ingredients: [
        '1.5 cups fresh water',
        '1 cup full-fat milk',
        '2 tbsp premium black tea leaves',
        '2 tbsp crushed Engaon Jaggery (Gud)',
        '1 inch fresh crushed ginger',
        '2 green cardamoms (elaichi), crushed',
      ],
      steps: [
        'In a saucepan, bring water to a boil with crushed ginger and cardamom pods.',
        'Add black tea leaves and simmer on low-medium flame for 2-3 minutes to extract maximum aroma.',
        'Pour in the milk and bring to a gentle rolling boil for 1-2 minutes.',
        'IMPORTANT VILLAGE TIP: Turn off heat before stirring in the jaggery. This prevents the milk from curdling!',
        'Strain immediately into earthen cups (kulhad) and enjoy piping hot.',
      ]
    },
    {
      title: 'Atte Ka Gud Halwa',
      category: 'Dessert',
      prepTime: '20 mins',
      servings: '4 servings',
      description: 'Rustic whole wheat halwa sweetened purely with melted gud and desi ghee.',
      ingredients: [
        '1 cup whole wheat flour (atta)',
        '3/4 cup Engaon Jaggery (shakkar or crushed)',
        '1/2 cup pure desi ghee',
        '2.5 cups hot water',
        '1/4 tsp green cardamom powder',
        'Almonds & cashews for garnish',
      ],
      steps: [
        'Dissolve crushed jaggery in 2.5 cups of warm water to prepare sweet syrup. Strain and keep warm.',
        'In a heavy-bottomed kadai, heat desi ghee and add wheat flour. Roast on low flame until nutty and golden brown (approx 8-10 mins).',
        'Slowly pour the warm jaggery water while whisking continuously to avoid lumps.',
        'Cook on medium flame until halwa absorbs the water and ghee starts separating from edges.',
        'Add cardamom powder and toasted dry fruits. Serve warm.',
      ]
    },
    {
      title: 'Village Gud Kheer (Payasam)',
      category: 'Festive',
      prepTime: '35 mins',
      servings: '5 servings',
      description: 'Creamy slow-cooked rice kheer enriched with the earthy caramel tones of natural Dhampur jaggery.',
      ingredients: [
        '1 litre full cream milk',
        '1/4 cup Basmati or Govindobhog rice (soaked)',
        '3/4 cup Engaon Jaggery Powder',
        '1/2 tsp cardamom powder',
        'A pinch of saffron strands',
        'Sliced pistachios and cashews',
      ],
      steps: [
        'Bring full cream milk to a boil in a heavy pot, then lower flame and simmer.',
        'Drain soaked rice and add to milk. Cook on low heat, stirring frequently, until rice is soft and milk thickens (about 25 mins).',
        'Add cardamom powder and saffron strands.',
        'Take kheer off the flame and let it cool slightly for 3-4 minutes.',
        'Fold in Engaon Jaggery Powder smoothly. Garnish with nuts and serve warm or chilled.',
      ]
    }
  ];

  if (!isOpen) return null;

  const current = recipes[activeTab];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container recipe-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close recipes">
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="modal-badge font-serif">Traditional Village Recipes</span>
          <h2 className="modal-title font-serif">Healthy & Wholesome Gud Delicacies</h2>
          <p className="modal-subtitle">Replace refined sugar with pure, nutrient-rich Engaon jaggery.</p>
        </div>

        {/* Recipe Tabs */}
        <div className="recipe-tabs">
          {recipes.map((r, i) => (
            <button
              key={r.title}
              className={`recipe-tab-btn ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {r.title}
            </button>
          ))}
        </div>

        {/* Active Recipe Content */}
        <div className="recipe-content-body">
          <div className="recipe-meta-bar">
            <span className="recipe-meta-pill">
              <Clock size={14} />
              <span>{current.prepTime}</span>
            </span>
            <span className="recipe-meta-pill">
              <Users size={14} />
              <span>{current.servings}</span>
            </span>
            <span className="recipe-meta-pill highlight">
              <Sparkles size={14} />
              <span>{current.category}</span>
            </span>
          </div>

          <p className="recipe-brief">{current.description}</p>

          <div className="recipe-details-grid">
            <div className="recipe-ingredients-box">
              <h4 className="recipe-subhead font-serif">Ingredients:</h4>
              <ul className="recipe-list">
                {current.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </div>

            <div className="recipe-steps-box">
              <h4 className="recipe-subhead font-serif">Method:</h4>
              <ol className="recipe-steps-list">
                {current.steps.map((st, idx) => (
                  <li key={idx}>{st}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
