class LRUCache(object):

    def __init__(self, size):
        self.size = size
        self.cache = {}
        self.priorities = []

    def adjust(self, key):
        item_index = self.priorities.index(key)
        self.priorities[:] = self.priorities[:item_index] + self.priorities[item_index+1:]
        self.priorities.insert(0, key)

    def push(self, key, value):
        item = (key, value)

        if item[0] in self.cache:
            self.adjust(item[0])
        else:
            if len(self.priorities) > self.size:
                self.get(self.priorities[-1])

            self.cache[item[0]] = item[1]
            self.priorities.insert(0, item[0])
            print (item[0], item[1])

    def get(self, key):
        if key in self.cache:
            to_get = self.cache[key]
            self.adjust(key)
            return to_get
        else:
            print("Key not found.")

    def remove(self, key):
        try:
            del self.cache[key]
            del self.priorities[self.priorities.index(key)]
        except:
            pass
        
def test():
    cache = LRUCache(size=3)
    cache.push(1, 'one')
    cache.push(2, 'two')
    cache.push(1, 'one_a')
    cache.push(3, 'three')
    print (cache.get(1))
    print (cache.get(2))
    cache.remove(2)
    print (cache.get(2))
    print (cache.get(3))
    print (cache.get(0))

test()