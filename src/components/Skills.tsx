import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  "Programming Languages": ["Java", "Python"],
  "Data Science": [
    "Machine Learning",
    "Data Structures",
    "Algorithms",
    "NLP",
    "CNN",
    "Time Series Analysis",
  ],
  "Databases & Cloud": ["MySQL", "Azure"],
  "Frameworks & Tools": [
    "Spring Boot",
    "Jenkins",
    "Git",
    "Selenium",
    "BDD Cucumber",
    "RESTful API",
  ],
  Certifications: [
    "Azure Data Engineer",
    "Azure AI Fundamentals",
    "Azure Data Fundamentals",
    "Huawei ICT AI",
    "Huawei ICT R&S",
  ],
};

export const Skills = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category}>
            <h3 className="text-sm font-medium mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill, i) => (
                <Badge key={i} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
