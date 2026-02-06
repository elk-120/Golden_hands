# Golden Hands - Site Web de Paniers Berbères

## 📁 Structure des fichiers

Votre site web nécessite les fichiers suivants dans le même dossier :

```
mon-site/
│
├── index.html          (Page d'accueil avec tous les modèles)
├── produit.html        (Page de sélection des tailles)
├── styles.css          (Fichier de styles CSS)
├── script.js           (Fichier JavaScript)
│
└── images/             (Dossier pour vos photos)
    ├── classique-naturel.jpg
    ├── raye-bleu.jpg
    ├── raye-rouge.jpg
    ├── multicolore.jpg
    ├── geometrique-noir.jpg
    ├── berbere-traditionnel.jpg
    ├── raye-vert.jpg
    └── pompons-rose.jpg
```

## 📸 Comment ajouter vos photos de paniers

### Étape 1 : Créer le dossier images
1. Dans le même dossier que vos fichiers HTML, créez un nouveau dossier appelé **"images"**

### Étape 2 : Nommer vos photos
Renommez vos photos de paniers exactement comme suit :
- `classique-naturel.jpg` - Panier Classique Naturel
- `raye-bleu.jpg` - Panier Rayé Bleu
- `raye-rouge.jpg` - Panier Rayé Rouge
- `multicolore.jpg` - Panier Multicolore
- `geometrique-noir.jpg` - Panier Géométrique Noir
- `berbere-traditionnel.jpg` - Panier Berbère Traditionnel
- `raye-vert.jpg` - Panier Rayé Vert
- `pompons-rose.jpg` - Panier Pompons Rose

### Étape 3 : Placer les photos
Placez toutes vos photos renommées dans le dossier **images/**

### Note importante :
- Le site fonctionnera même sans photos (il affichera un emoji 🧺 à la place)
- Les formats acceptés : .jpg, .jpeg, .png
- Taille recommandée : 800x800 pixels minimum
- Évitez les photos trop lourdes (max 500 KB par photo)

## ⚙️ Configuration WhatsApp

### TRÈS IMPORTANT : Modifier votre numéro WhatsApp

Dans le fichier **produit.html**, ligne 282, changez :

```javascript
const WHATSAPP_NUMBER = '212XXXXXXXXX';
```

Par votre vrai numéro WhatsApp au format international (sans le +) :

**Exemples :**
- Maroc : `212612345678`
- France : `33612345678`
- Algérie : `213612345678`

## 🛒 Comment fonctionne le panier

### Pour le client :
1. **Page d'accueil (index.html)** : Le client voit tous les modèles de paniers
2. **Clic sur "Voir les tailles"** : Il accède à la page du produit
3. **Page produit (produit.html)** : Il voit toutes les tailles disponibles (15cm à 50cm)
4. **Ajouter au panier** : Il clique sur "Ajouter au panier" pour chaque taille qu'il veut
5. **Icône panier** : En haut à droite, il voit le nombre d'articles (🛒 3)
6. **Ouvrir le panier** : Il clique sur l'icône pour voir tous ses articles
7. **Commander** : Il clique sur "Commander via WhatsApp"
8. **WhatsApp** : Un message pré-rédigé s'ouvre avec tous les détails :

```
Bonjour Golden Hands! 👋

Je souhaite passer commande pour les articles suivants:

📦 MA COMMANDE:
━━━━━━━━━━━━━━━━━━━━━━
1. Panier Rayé Bleu
   📏 Diamètre: 25 cm
   💰 Prix: 140 DH

2. Panier Classique Naturel
   📏 Diamètre: 30 cm
   💰 Prix: 240 DH

━━━━━━━━━━━━━━━━━━━━━━
💵 TOTAL: 380 DH

Pourriez-vous me confirmer:
• La disponibilité de ces articles
• Les délais de livraison
• Les modalités de paiement

Merci beaucoup! 🙏
✨ Golden Hands - Artisanat Marocain Authentique
```

## ✨ Fonctionnalités

✅ Affichage de 8 modèles différents de paniers
✅ Chaque modèle a 8 tailles disponibles (15-50 cm)
✅ Photos réelles de vos paniers
✅ Système de panier avec compteur
✅ Ajout/suppression d'articles du panier
✅ Calcul automatique du total
✅ Envoi de commande via WhatsApp avec message détaillé
✅ Design responsive (mobile, tablette, desktop)
✅ Animations et effets modernes
✅ Sauvegarde du panier (même si on ferme le navigateur)

## 🚀 Installation

1. Téléchargez tous les fichiers (index.html, produit.html, styles.css, script.js)
2. Placez-les dans un même dossier
3. Créez un sous-dossier "images"
4. Ajoutez vos photos de paniers dans le dossier images
5. Modifiez votre numéro WhatsApp dans produit.html
6. Ouvrez index.html dans votre navigateur

## 📱 Pour mettre en ligne

Pour mettre votre site sur Internet :
1. Utilisez un service d'hébergement gratuit comme :
   - GitHub Pages (gratuit)
   - Netlify (gratuit)
   - Vercel (gratuit)
   
2. Uploadez tous vos fichiers (HTML, CSS, JS, images)
3. Votre site sera accessible via une URL

## 🎨 Personnalisation

### Modifier les couleurs :
Ouvrez **styles.css** et modifiez les variables au début :
```css
:root {
    --sand: #E8DCC4;
    --terracotta: #C87941;
    --deep-bronze: #8B5A2B;
    /* etc... */
}
```

### Ajouter plus de produits :
1. Ajoutez une nouvelle carte dans **index.html**
2. Ajoutez le produit dans **produit.html** (section `const products`)
3. Ajoutez la photo correspondante dans le dossier images

### Modifier les prix :
Dans **produit.html**, modifiez le tableau `sizes` :
```javascript
const sizes = [
    { diameter: 15, price: 100, description: '...' },
    { diameter: 20, price: 120, description: '...' },
    // etc...
];
```

## ❓ Support

Si vous avez des questions ou des problèmes, vérifiez que :
- ✅ Tous les fichiers sont dans le même dossier
- ✅ Le dossier "images" existe
- ✅ Les noms des photos correspondent exactement
- ✅ Votre numéro WhatsApp est correct

---

© 2024 Golden Hands - Paniers Berbères Artisanaux
Fait avec ❤️ pour l'artisanat marocain
