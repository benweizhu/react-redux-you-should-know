### This is the theory from official site.


Keys help React identify which items have changed, are added, or are removed.

The best way to pick a key is to use a string that uniquely identifies a list item among its **siblings**. (The key only has to be unique among its siblings, not globally unique.)

When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort.

The reason is React Reconciliation.

1.Elements Of Different Types
```HTML
<div>
  <Counter />
</div>

<span>
  <Counter />
</span>
```

2.DOM Elements Of The Same Type

Only update the attribute.

```HTML
<div className="before" title="stuff" />

<div className="after" title="stuff" />
```

3.Component Elements Of The Same Type

```HTML
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

If don't have Keys, React will mutate every child instead of realizing it can keep the `<li>Duke</li>` and `<li>Villanova</li> `subtrees intact. This inefficiency can be a problem.

### Real Experiment

Test this example with React Perf Tool.

![image](https://cloud.githubusercontent.com/assets/5471228/26673026/ffb94f7a-46ed-11e7-9003-78eb6824a218.png)

