import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

export const AboutMe = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Passionate developer and data enthusiast who loves turning complex
          problems into elegant solutions. Currently expanding horizons with MSc
          in Data Science at University of Nottingham, backed by industry
          experience in machine learning and automation
        </p>

        <div className="mt-4">
          <h3 className="font-semibold mb-2">Education</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              MSc in Data Science (Ongoing) - University of Nottingham, UK
            </li>
            <li>
              B.Tech in Electronics and Communication - Dr. A.P.J. Abdul Kalam
              Technical University, India
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold mb-2">Publications</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              Deepfake Audio Detection with Neural Networks Using Audio Features
              (IEEE-2022)
            </li>
            <li>
              Stock Market Prediction with Lasso Regression Using Technical
              Analysis and Time Lag (IEEE-2021)
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
