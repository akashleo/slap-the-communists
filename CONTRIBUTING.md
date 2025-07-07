# 🤝 Contributing to Slap the Communists

Thank you for your interest in contributing to this project! This guide will walk you through the process of adding new communist leaders to the application.

## 📋 Prerequisites

Before contributing, please ensure you have:

- Basic knowledge of TypeScript/JavaScript
- Git installed on your machine
- Node.js (version 16 or higher)
- A code editor (VS Code recommended)

## 🎯 How to Add a New Communist Leader

### Step 1: Fork and Clone the Repository

1. Fork this repository to your GitHub account
2. Clone your fork locally:
```bash
git clone https://github.com/yourusername/slap-commies.git
cd slap-commies
```

3. Install dependencies:
```bash
npm install
```

### Step 2: Prepare the Leader Image

1. **Find a high-quality image** of the communist leader
   - Recommended dimensions: At least 400x400 pixels
   - Preferred format: JPG or PNG
   - Ensure the image is in the public domain or you have rights to use it

2. **Optimize the image**:
   - Crop to a square aspect ratio if possible
   - Keep file size under 500KB for optimal performance
   - Use descriptive filename (e.g., `ho_chi_minh.jpg`)

3. **Add the image to the public folder**:
```bash
# Place your image in the public/ directory
public/your_leader_name.jpg
```

### Step 3: Add Leader Data

1. Open `src/data/leaders.ts`
2. Add a new leader object to the `leaders` array:

```typescript
{
  id: 'unique-leader-id',
  name: 'Leader Full Name',
  description: 'Comprehensive description of the leader, their role, achievements, and historical significance. Keep it informative and historically accurate.',
  imageUrl: '/your_image_filename.jpg',
  country: 'Country or Region',
  years: 'YYYY-YYYY'
}
```

### Step 4: Leader Data Requirements

#### Required Fields:

- **`id`**: Unique identifier (use lowercase, hyphen-separated format)
- **`name`**: Full name of the leader
- **`description`**: Detailed historical description (2-4 sentences)
- **`imageUrl`**: Path to image file (must start with `/`)
- **`country`**: Country or region they led
- **`years`**: Period of leadership or activity

#### Example Entry:

```typescript
{
  id: 'ho-chi-minh',
  name: 'Ho Chi Minh',
  description: 'Vietnamese revolutionary and statesman who served as Prime Minister and later President of the Democratic Republic of Vietnam. He was a key figure in the foundation of the Democratic Republic of Vietnam in 1945, as well as the People\'s Army of Vietnam and the Viet Cong during the Vietnam War.',
  imageUrl: '/ho_chi_minh.jpg',
  country: 'Vietnam',
  years: '1945-1969'
}
```

### Step 5: Validate Your Addition

1. **Check the Leader interface** in `src/types/Leader.ts` to ensure your data matches the expected structure

2. **Test locally**:
```bash
npm run dev
```

3. **Verify your leader appears**:
   - Navigate to the selection page
   - Confirm the image loads properly
   - Test the slapping functionality
   - Check responsiveness on different screen sizes

### Step 6: Code Quality Guidelines

#### Image Guidelines:
- ✅ Use descriptive filenames
- ✅ Keep images under 500KB
- ✅ Prefer square aspect ratios
- ✅ Use appropriate image formats (JPG/PNG)
- ❌ Don't use copyrighted images
- ❌ Don't use extremely large files

#### Data Guidelines:
- ✅ Use historically accurate information
- ✅ Write clear, informative descriptions
- ✅ Use consistent formatting
- ✅ Include proper time periods
- ❌ Don't include offensive or inappropriate content
- ❌ Don't use biased or inflammatory language

### Step 7: Submit Your Contribution

1. **Create a new branch**:
```bash
git checkout -b add-leader-name
```

2. **Commit your changes**:
```bash
git add .
git commit -m "Add [Leader Name] to communist leaders collection"
```

3. **Push to your fork**:
```bash
git push origin add-leader-name
```

4. **Create a Pull Request**:
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template (see below)

## 📝 Pull Request Template

When submitting your PR, please include:

```markdown
## 🆕 New Leader Addition

**Leader Name**: [Full Name]
**Country/Region**: [Country]
**Time Period**: [Years]

### ✅ Checklist
- [ ] Added leader data to `src/data/leaders.ts`
- [ ] Added leader image to `public/` folder
- [ ] Image filename matches `imageUrl` in data
- [ ] Tested locally - leader appears in selection
- [ ] Tested locally - slapping functionality works
- [ ] Image is properly sized and optimized
- [ ] Historical information is accurate
- [ ] Description is informative and neutral

### 📸 Screenshot
[Include a screenshot of the leader card in the selection page]

### 📚 Historical Context
[Brief explanation of why this leader should be included]
```

## 🚫 Content Guidelines

### Acceptable Leaders:
- Historical communist leaders and politicians
- Marxist revolutionary figures
- Communist party leaders
- Socialist movement leaders

### Requirements:
- Must have held significant political power or influence
- Must be historically documented
- Must have clear connection to communist/socialist movements

### Not Acceptable:
- Living individuals (unless historically significant and retired)
- Fictional characters
- Non-political figures
- Controversial modern figures without historical consensus

## 🔍 Review Process

1. **Automatic Checks**: Your PR will run through automated linting and build checks
2. **Content Review**: Maintainers will verify historical accuracy and appropriateness
3. **Technical Review**: Code quality and implementation will be checked
4. **Testing**: Functionality will be tested across different devices

## 🐛 Common Issues and Solutions

### Image Not Loading:
- Check that the filename in `imageUrl` matches the actual file in `public/`
- Ensure the image path starts with `/`
- Verify the image file is properly formatted

### TypeScript Errors:
- Ensure all required fields are included
- Check that the data structure matches the `Leader` interface
- Verify quotes are properly escaped in descriptions

### Build Failures:
- Run `npm run lint` to check for linting errors
- Ensure all imports are correct
- Check that there are no syntax errors

## 💬 Getting Help

If you need assistance:

1. **Check existing issues** for similar problems
2. **Review this guide** thoroughly
3. **Ask in discussions** for general questions
4. **Open an issue** for bugs or specific problems

## 🏆 Recognition

Contributors will be recognized in:
- Project README contributors section
- Git commit history
- Special thanks in release notes

Thank you for helping expand our collection of historical communist leaders! Your contributions make this project more comprehensive and educational.

---

**Note**: All contributions are subject to review and must meet our quality and content standards. We reserve the right to request changes or decline contributions that don't meet our guidelines. 