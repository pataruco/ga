class: frontpage

<div>
  <h2>Bonus</h2>
  <hr/>
  <h1>Machine Learning </h1>
</div>

---

## Machine Learning

Let's talk about this data source:

.image-one-fourth[![](https://pataruco.s3.amazonaws.com/ga/ai/ai-data-source.png)]

---

## Machine Learning

Training a model is like fitting a curve to a set of data points.

1. Gather training data
2. Split data into features and labels
3. Select an appropriate model for the data
4. Generalise the data with the model
5. Predict new labels using the model

---

## Machine Learning

```python
import numpy as np
import pandas as pd
import sklearn.linear_model
import os

# Gather training data
datapath = os.path.join("datasets", "lifesat", "")
oecd_bli = pd.read_csv(datapath + "oecd_bli_2015.csv", thousands=',')
gdp_per_capita = pd.read_csv(datapath + "gdp_per_capita.csv",
                           thousands=',', delimiter='\t', encoding='latin1', na_values="n/a")

# Split data into features and labels
country_stats = prepare_country_stats(oecd_bli, gdp_per_capita)

X = np.c_[country_stats["GDP per capita"]]
y = np.c_[country_stats["Life satisfaction"]]

# Select an appropriate model for the data
model = sklearn.linear_model.LinearRegression()

# Generalise the data with the model
model.fit(X, y)

# Predict new labels using the model
# Make a prediction for Czech Republic
X_new = [[17256.918]]  # Czech Republic' GDP per capita
print(model.predict(X_new))  # Outputs [[ 5.700634022550953 ]]
```

---

## Machine Learning

Let's see how is done in practice, but first let's see our data source again

---

## Machine Learning

Gather training data
.image-one-fourth[![](https://pataruco.s3.amazonaws.com/ga/ai/ai-data-source.png)]

---

## Machine Learning

Split data into features and labels

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/split-into-features-labels.png)]

---

## Machine Learning

Select an appropriate model for the data
.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/select-model-1.png)]

---

## Machine Learning

Select an appropriate model for the data
.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/select-model-2.png)]

---

## Machine Learning

Select an appropriate model for the data
.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/select-model-3.png)]

---

## Machine Learning

Select an appropriate model for the data
.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/select-model-4.png)]

---

## Machine Learning

Generalise the data with the model

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/generalise-the-model-1.png)]

---

## Machine Learning

Generalise the data with the model

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/generalise-the-model-2.png)]

---

## Machine Learning

Generalise the data with the model

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/generalise-the-model-3.png)]

---

## Machine Learning

Predict new labels using the model

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/make-prediction-1.png)]

---

## Machine Learning

Predict new labels using the model

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/make-prediction-2.png)]

---

## Machine Learning

Now let's do the same process but with a different model

1. Gather training data
2. Split data into features and labels
3. Select an appropriate model for the data ([K Nearest Neighbour Model](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm))
4. Generalise the data with the model
5. Predict new labels using the model

---

## Machine Learning

Now let's do the same process but with a different model. ([K Nearest Neighbour Model](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm))

```python
# Prepare the data
country_stats = prepare_country_stats(oecd_bli, gdp_per_capita)

X = np.c_[country_stats["GDP per capita"]]
y = np.c_[country_stats["Life satisfaction"]]

# Select model
model = sklearn.neighbors.KNeighborsRegressor(n_neighbors=3)

# Train the model
model.fit(X, y)

# Make a prediction for Czech Republic
X_new = [[17256.918]]  # Czech Republic' GDP per capita
print(model.predict(X_new))  # Outputs [[ 5.5 ]]
```

---

## Machine Learning

Prediction with ([K Nearest Neighbour Model](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm))

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/make-prediction-kni-1.png)]

---

## Machine Learning

Let's calculate the error of our models

.row[
.col[
Root Mean Square Error

![](https://pataruco.s3.amazonaws.com/ga/ai/root-mean-square-error.png)
]
.col[

```python
from sklearn.metrics import mean_squared_error

czech_actual_life_satisfaction =
full_country_stats.loc["Czech Republic"]["Life satisfaction"]

czech_mse = mean_squared_error(
[czech_actual_life_satisfaction],
[czech_predicted_life_satisfaction]
)
czech_rmse = np.sqrt(czech_mse)

print(czech_rmse) # Outputs 1.0

```

]
]

---

## Machine Learning

Now, let's contrast the error of our models

|                        | Linear Regression | K Nearest Neighbour |
| ---------------------- | ----------------- | ------------------- |
| Root Mean Square Error | 0.80              | 1.0                 |

---

## Machine Learning

Now let's run the same process but with more features, in this case is the `Self reported health` feature.

So remember, the more features you have the more accurate your model will be.

---

## Machine Learning

Gather training data

.image-third[![](https://pataruco.s3.amazonaws.com/ga/ai/self-reported-health-source.png)]

---

## Machine Learning

Split data into features and labels

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/split-data-3d-regression-1.png)]

---

## Machine Learning

Split data into features and labels

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/split-data-3d-regression-2.png)]

---

## Machine Learning

Split data into features and labels

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/split-data-3d-regression-2.png)]

---

## Machine Learning

Select an appropriate model for the data (3D Linear regression)

```python
X = three_country_stats[[
  "GDP per capita",
  "Self-reported health"
]].values
y = np.c_[three_country_stats["Life satisfaction"]]

# Select a linear model
model = sklearn.linear_model.LinearRegression()

# Train the model
model.fit(X, y)

# Make a prediction for Czech Republic
X_new = [[17256.918, 60.0]]  # Czech Republic' GDP and health
print(model.predict(X_new))  # Outputs [[ 5.700634022550953 ]]
```

---

## Machine Learning

Generalise the data with the model

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/generalise-the-model-3d-linear-1.png)]

---

## Machine Learning

Now, let's contrast the error of our models

|                        | Linear Regression | K Nearest Neighbour | 3D Linear Regression |
| ---------------------- | ----------------- | ------------------- | -------------------- |
| Root Mean Square Error | 0.80              | 1.0                 | 0.77                 |

---

## Machine Learning

Now as you imagine, the more features you have the more accurate your model will be.

So we can iterate on:

1. Gather training data
2. Split data into features and labels
3. Select an appropriate model for the data
4. Generalise the data with the model
5. Predict new labels using the model

---

## Machine Learning

Gather training data

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/gather-data-more-features.png)]

---

## Machine Learning

Split data into features and labels

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/split-data-more-features.png)]

---

## Machine Learning

You get the idea...

---

## Machine Learning

Is hard!

- Data needs organising and cleaning
- Irregularities need to be replaced or removed
- Changing data format might suit your model better e.g. from continuous to discrete
- Continuous values might need scaling to bring out relationships
- You need to pick the right model for the job
- You need to pick the right hyperparameters e.g. number of nearest neighbours
- You need to pick the right performance measurement for the data and model

---

## Machine Learning

So it easy with data source like this, but what about images?

---

## Machine Learning

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/image-data-source.png)]

---

## Machine Learning

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/image-split-labels-features.png)]

---

## Machine Learning

.image-three-fourths[![](https://pataruco.s3.amazonaws.com/ga/ai/image-convulsion.png)]

---

## Machine Learning

Now you understand, why for years we have been using re captcha to train AI models

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
